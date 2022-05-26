import { FC, useState } from 'react';
import {
  AddCard,
  AddCardWrapper,
  ColumnWrapper,
  Settings,
  SettingsButton,
  TaskList,
  TitleStyled
} from './styled';
import { ReactComponent as Plus } from '../../../../assets/svg/plus.svg';
import { Droppable, Draggable, DraggableProvided } from 'react-beautiful-dnd';
import type { DroppableProvided } from 'react-beautiful-dnd';
import CustomModal from '../../../../Components/modal/modal';
import { Data } from '../boardWrapper/boardWrapper';
import BoardItem from '../boardItem/boardItem';

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

const BoardsColumn: FC<Props> = ({ tasks, column, index, currentState, setNewState }) => {
  const [toggle, setToggle] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided) => {
        return (
          <ColumnWrapper {...provided.draggableProps} ref={provided.innerRef}>
            <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
              <TitleStyled {...provided.dragHandleProps}>{column.title}</TitleStyled>
              <span
                style={{ fontSize: '26px', fontWeight: '600', cursor: 'pointer' }}
                onClick={() => setToggle(!toggle)}
              >
                ...
              </span>
              <CustomModal
                modalVisible={modalVisible}
                setIsModalVisible={(toggle: boolean) => setModalVisible(toggle)}
                title={column.title}
                currentState={currentState}
                setNewState={setNewState}
                taskId={'0'}
                columnId={column.id}
                type="column"
              />
              {toggle ? (
                <Settings>
                  <SettingsButton
                    onClick={() => setModalVisible(true)}
                    style={{ background: 'rgb(190 33 33)' }}
                  >
                    Удалить таблицу
                  </SettingsButton>
                </Settings>
              ) : null}
            </div>
            <Droppable droppableId={column.id}>
              {(provided: DroppableProvided) => {
                return (
                  <TaskList {...provided.droppableProps} ref={provided.innerRef}>
                    {tasks.map((task, i) => {
                      return (
                        <Draggable key={task.id} draggableId={task.id} index={i}>
                          {(provided: DraggableProvided) => {
                            return (
                              <BoardItem
                                currentState={currentState}
                                setNewState={setNewState}
                                provided={provided}
                                task={task}
                                column={column}
                              />
                            );
                          }}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </TaskList>
                );
              }}
            </Droppable>
            <AddCardWrapper>
              <Plus />
              <AddCard>Добавить карточку</AddCard>
            </AddCardWrapper>
          </ColumnWrapper>
        );
      }}
    </Draggable>
  );
};

export default BoardsColumn;
