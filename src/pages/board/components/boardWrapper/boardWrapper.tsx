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

export interface Data {
  tasks: { [key: string]: { id: string; content: string } };
  columns: { [key: string]: { id: string; title: string; taskIds: string[] } };
  columnOrder: string[];
}

const BoardWrapper: FC = () => {
  const { t } = useTranslation();
  const { columns } = useSelector(columnsSelector);
  const [disabled, setDisabled] = useState(false);
  const [columnTitle, setColumnTitle] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const boardId = useParams().id;

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
      // Require the mouse to move by 10 pixels before activating
      activationConstraint: {
        distance: 10
      }
    }),
    useSensor(TouchSensor, {
      // Press delay of 250ms, with tolerance of 5px of movement
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
        const title = columns.find((el) => el.id === String(active.id))?.title;

        if (boardId)
          dispatch(
            updateColumn({
              boardId,
              id: String(active.id),
              title: title ? title : '',
              order: over?.data.current?.sortable.index + 1
            })
          );
      }
    }
  };

  return (
    <BoardWrapperStyled>
      <DndContext onDragEnd={dragEnd} sensors={sensors} collisionDetection={closestCenter}>
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
            placeholder={disabled ? 'Введите текст' : 'Добавить колонку'}
          />
          <SaveButtonCardTitle disabled={!disabled} onClick={addNewColumn} />
        </BlockAddColumn>
      </NextColumnWrapper>
    </BoardWrapperStyled>
  );
};

export default BoardWrapper;
