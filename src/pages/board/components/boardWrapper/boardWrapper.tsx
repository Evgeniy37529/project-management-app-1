import { FC, FocusEvent, useEffect, useState } from 'react';
import BoardsColumn from '../boardColumn/boardsColumn';
import { AddColumn, AddColumnWrapper, BoardWrapperStyled } from './styled';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../store/store';
import { columnsSelector } from '../../../../store/selectors/columns';
import { createColumns, getAllColumns, updateColumn } from '../../../../store/reducers/columns';
import { useParams } from 'react-router-dom';
import {
  BlockAddColumn,
  ButtonAddColumn,
  EntryFieldCardTitle,
  NextColumnWrapper,
  SaveButtonCardTitle
} from '../boardColumn/styled';
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  DragOverEvent,
  KeyboardSensor,
  MouseSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy
} from '@dnd-kit/sortable';
import tasks, { createTasks, deleteTask, updateTask } from '../../../../store/reducers/tasks';
import { tasksSelector } from '../../../../store/selectors/tasks';
import { userSelector } from '../../../../store/selectors/user';

export interface Data {
  tasks: { [key: string]: { id: string; content: string } };
  columns: { [key: string]: { id: string; title: string; taskIds: string[] } };
  columnOrder: string[];
}

const BoardWrapper: FC = () => {
  const { t } = useTranslation();
  const { columns } = useSelector(columnsSelector);
  const { tasks } = useSelector(tasksSelector);
  const [disabled, setDisabled] = useState(false);
  const [columnTitle, setColumnTitle] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const boardId = useParams().id;
  const { id } = useSelector(userSelector);

  const disableChange = () => {
    setDisabled(!disabled);
  };
  const nameEntryTask = (ev: FocusEvent<HTMLInputElement>) => {
    setColumnTitle(ev.target.value);
  };
  const addNewColumn = () => {
    if (boardId) dispatch(createColumns({ boardId, title: columnTitle }));
    disableChange();
  };
  useEffect(() => {
    if (boardId) dispatch(getAllColumns(boardId));
  }, [dispatch]);
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 10
      }
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 5
      }
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );

  const dragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over) {
      if (active.id !== over.id) {
        const columnTitle = columns.find((el) => el.id === String(active.id))?.title;
        const activeTask = tasks.find((el) => el.id === String(active.id));
        const task = tasks.find((el) => el.id === String(active.id));
        const activeColumn = columns.find(
          (el) => el.id === tasks.find((el) => el.id === String(active.id))?.columnId
        );
        const overTask = tasks.find((el) => el.id === String(over.id));
        const overColumn = columns.find((el) => el.id === overTask?.columnId);
        if (!boardId) {
          return;
        }

        if (task && activeColumn && overColumn && id) {
          if (activeColumn.id !== overColumn.id) {
            dispatch(
              deleteTask({
                boardId,
                columnId: activeColumn.id ?? '',
                taskId: String(active.id)
              })
            )
              .then(() =>
                dispatch(
                  createTasks({
                    boardId,
                    columnId: overColumn.id ?? '',
                    title: task.title ?? '',
                    userId: id
                  })
                )
              )
              .then(() =>
                dispatch(
                  updateTask({
                    boardId,
                    description: task.title ?? '',
                    columnId: overColumn.id ?? '',
                    taskId: String(active.id),
                    title: task.title ?? '',
                    userId: String(localStorage.getItem('userId')),
                    order: over?.data.current?.sortable.index + 1
                  })
                )
              );
          } else {
            dispatch(
              updateTask({
                boardId,
                description: task.title ?? '',
                columnId: activeColumn.id,
                taskId: String(active.id),
                title: task.title ?? '',
                userId: String(localStorage.getItem('userId')),
                order: over?.data.current?.sortable.index + 1
              })
            );
          }
        }

        if (columnTitle)
          dispatch(
            updateColumn({
              boardId,
              id: String(active.id),
              title: columnTitle ?? '',
              order: over?.data.current?.sortable.index + 1
            })
          );
      }
    }
  };
  const dragOver = (event: DragOverEvent) => {};

  return (
    <BoardWrapperStyled>
      <DndContext
        onDragEnd={dragEnd}
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragOver={dragOver}
      >
        <SortableContext items={columns} strategy={verticalListSortingStrategy}>
          {columns.map((el) => (
            <BoardsColumn column={el} key={el.id} />
          ))}
        </SortableContext>
      </DndContext>

      <NextColumnWrapper style={{ paddingLeft: '20px' }}>
        <BlockAddColumn>
          <ButtonAddColumn onClick={disableChange} disabled={disabled} />
          <EntryFieldCardTitle
            ref={(input) => input && input.focus()}
            type="text"
            onChange={nameEntryTask}
            disabled={!disabled}
            placeholder={disabled ? t('boardsColumn.enter_text') : t('boardsColumn.add_column')}
          />
          <SaveButtonCardTitle disabled={!disabled} onClick={addNewColumn} />
        </BlockAddColumn>
      </NextColumnWrapper>
    </BoardWrapperStyled>
  );
};

export default BoardWrapper;
