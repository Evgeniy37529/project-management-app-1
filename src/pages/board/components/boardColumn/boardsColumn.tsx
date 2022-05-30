import { FocusEvent, useEffect, useState } from 'react';
import {
  BlockAddColumn,
  ButtonAddColumn,
  ColumnWrapper,
  EntryFieldCardTitle,
  NextColumnWrapper,
  SaveButtonCardTitle,
  TitleStyled
} from './styled';
import CustomModal from '../../../../components/modal/modal';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../../store/store';
import { useParams } from 'react-router-dom';
import BoardItem from '../boardItem/boardItem';
import { IColumns } from '../../../../types/columns';
import { tasksSelector } from '../../../../store/selectors/tasks';
import { createTasks, getAllTasks } from '../../../../store/reducers/tasks';
import { horizontalListSortingStrategy, SortableContext, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { t } from 'i18next';
import { userSelector } from '../../../../store/selectors/user';

const BoardsColumn = ({ column }: { column: IColumns }) => {
  const { tasks } = useSelector(tasksSelector);
  const { id } = useSelector(userSelector);
  const [columnTitle, setColumnTitle] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const boardId = useParams().id;
  const [disabled, setDisabled] = useState(false);
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: column.id
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };

  const disableChange = () => {
    setDisabled(!disabled);
  };
  const nameEntryTask = (ev: FocusEvent<HTMLInputElement>) => {
    setColumnTitle(ev.target.value);
  };
  const addNewTask = () => {
    if (boardId && id)
      dispatch(createTasks({ columnId: column.id, boardId, title: columnTitle, userId: id }));
    disableChange();
  };
  const inputCleaning = (ev: FocusEvent<HTMLInputElement>) => {
    ev.target.value = '';
  };

  useEffect(() => {
    if (boardId) dispatch(getAllTasks({ boardId, columnId: column.id }));
  }, [dispatch]);

  return (
    <ColumnWrapper ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
        <TitleStyled>{column.title}</TitleStyled>

        <CustomModal
          title={column.title}
          taskId={'0'}
          columnId={column.id}
          type="column"
          boardId={boardId ? boardId : ''}
          userId=""
        />
      </div>

      <SortableContext items={tasks} strategy={horizontalListSortingStrategy}>
        {tasks.map((el) => {
          if (el.columnId === column.id) {
            return <BoardItem columnId={column.id} task={el} key={el.id} />;
          }
        })}
      </SortableContext>

      <NextColumnWrapper>
        <BlockAddColumn>
          <ButtonAddColumn onClick={disableChange} disabled={disabled} />
          <EntryFieldCardTitle
            ref={(input) => input && input.focus()}
            type="text"
            onChange={nameEntryTask}
            onBlur={inputCleaning}
            disabled={!disabled}
            placeholder={disabled ? t('boardsColumn.enter_text') : t('boardsColumn.add_task')}
          />
          <SaveButtonCardTitle disabled={!disabled} onClick={addNewTask} />
        </BlockAddColumn>
      </NextColumnWrapper>
    </ColumnWrapper>
  );
};

export default BoardsColumn;
