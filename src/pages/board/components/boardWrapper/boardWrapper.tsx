import { FC, useEffect, useState } from 'react';
import BoardsColumn from '../boardColumn/boardsColumn';
import { AddColumn, AddColumnWrapper, BoardWrapperStyled } from './styled';
import { initialData } from '../../../../constants/boardCardConst';
import { ReactComponent as Plus } from '../../../../assets/svg/plus.svg';
import { useTranslation } from 'react-i18next';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import { tasksSelector } from '../../../../store/selectors/tasks';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../store/store';
import { getAllTasks } from '../../../../store/reducers/tasks';
import { columnsSelector } from '../../../../store/selectors/columns';
import { getAllColumns } from '../../../../store/reducers/columns';

export interface Data {
  tasks: { [key: string]: { id: string; content: string } };
  columns: { [key: string]: { id: string; title: string; taskIds: string[] } };
  columnOrder: string[];
}

const BoardWrapper: FC = () => {
  const { t } = useTranslation();
  const [state, setState] = useState(initialData);

  const { tasks } = useSelector(tasksSelector);
  const { columns } = useSelector(columnsSelector);
  const columnOrder = columns.map((column) => column.id);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getAllTasks());
    dispatch(getAllColumns());

    const obj: Data = {
      tasks: {},
      columns: {},
      columnOrder: []
    };
    tasks.forEach((task) => {
      obj.tasks[task.id] = { id: task.id, content: task.title };
    });
    // columns.forEach((column) => {
    //   obj.columns[columns.id] = { id: task.id, content: task.title };
    // });
    // setState({ tasks, columns, columnOrder });
  }, []);

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    if (type === 'column') {
      const newColumnOrder = Array.from(state.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...state,
        columnOrder: newColumnOrder
      };
      setState(newState);
      return;
    }

    const home = state.columns[source.droppableId];
    const foreign = state.columns[destination.droppableId];

    if (home === foreign) {
      const newTaskIds = Array.from(home.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newHome = {
        ...home,
        taskIds: newTaskIds
      };

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newHome.id]: newHome
        }
      };

      setState(newState);
      return;
    }

    const homeTaskIds = Array.from(home.taskIds);
    homeTaskIds.splice(source.index, 1);
    const newHome = {
      ...home,
      taskIds: homeTaskIds
    };

    const foreignTaskIds = Array.from(foreign.taskIds);
    foreignTaskIds.splice(destination.index, 0, draggableId);
    const newForeign = {
      ...foreign,
      taskIds: foreignTaskIds
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newHome.id]: newHome,
        [newForeign.id]: newForeign
      }
    };
    console.log(newState);
    setState(newState);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="all-columns" direction="horizontal" type="column">
        {(provided) => {
          return (
            <BoardWrapperStyled {...provided.droppableProps} ref={provided.innerRef}>
              {state.columnOrder.map((columnId, i) => {
                const column = state.columns[columnId];
                const tasks = column.taskIds.map((taskId: string) => state.tasks[taskId]);

                return (
                  <BoardsColumn
                    currentState={state}
                    setNewState={(newState: Data) => setState(newState)}
                    key={column.id}
                    column={column}
                    tasks={tasks}
                    index={i}
                  />
                );
              })}
              <AddColumnWrapper>
                <Plus style={{ marginRight: '10px' }} />
                <AddColumn>{t('boards.add_column')}</AddColumn>
              </AddColumnWrapper>
              {provided.placeholder}
            </BoardWrapperStyled>
          );
        }}
      </Droppable>
    </DragDropContext>
  );
};

export default BoardWrapper;
