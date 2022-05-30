import { FocusEvent, useEffect, useState } from 'react';
import {
  BlockAddColumn,
  ButtonAddColumn,
  ColumnWrapper,
  EntryFieldCardTitle,
  NextColumnWrapper,
  SaveButtonCardTitle,
  Settings,
  SettingsButton,
  TaskList,
  TitleStyled
} from './styled';
import CustomModal from '../../../../components/modal/modal';
import { Data } from '../boardWrapper/boardWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../../store/store';
import { useParams } from 'react-router-dom';
import { createColumns, getAllColumns } from '../../../../store/reducers/columns';
import BoardItem from '../boardItem/boardItem';
import { IColumns } from '../../../../types/columns';
import { tasksSelector } from '../../../../store/selectors/tasks';
import { createTasks, getAllTasks } from '../../../../store/reducers/tasks';
import { t } from 'i18next';

interface Props {
  tasks: {
    id: string;
    content: string;
  }[];
  column: {
    id: string;
    title: string;
    taskIds: string[];
  };
  index: number;
  currentState: Data;
  setNewState: (newState: Data) => void;
}

const BoardsColumn = ({ column }: { column: IColumns }) => {
  const { tasks } = useSelector(tasksSelector);
  const [columnTitle, setColumnTitle] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const boardId = useParams().id;
  const [disabled, setDisabled] = useState(false);

  const disableChange = () => {
    setDisabled(!disabled);
  };
  const nameEntryTask = (ev: FocusEvent<HTMLInputElement>) => {
    setColumnTitle(ev.target.value);
  };
  const addNewTask = () => {
    if (boardId) dispatch(createTasks({ columnId: column.id, boardId, title: columnTitle }));
    disableChange();
  };
  const inputCleaning = (ev: FocusEvent<HTMLInputElement>) => {
    ev.target.value = '';
  };
  useEffect(() => {
    if (boardId) dispatch(getAllTasks({ boardId, columnId: column.id }));
  }, [dispatch]);

  return (
    <ColumnWrapper>
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
      {tasks.map((el) => {
        if (el.columnId === column.id) {
          return <BoardItem columnId={column.id} task={el} key={el.id} />;
        }
      })}
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
