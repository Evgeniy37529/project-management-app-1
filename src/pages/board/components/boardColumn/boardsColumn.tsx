import { FC, useState } from 'react';
import {
  AddCard,
  AddCardWrapper,
  CardStyled,
  ColumnWrapper,
  Settings,
  SettingsButton,
  TaskList,
  TitleStyled
} from './styled';
import { ReactComponent as Plus } from '../../../../assets/svg/plus.svg';
import { Droppable, Draggable, DraggableProvided } from 'react-beautiful-dnd';
import type { DroppableProvided } from 'react-beautiful-dnd';

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
}

const BoardsColumn: FC<Props> = ({ tasks, column, index }) => {
  const [togle, srtTogle] = useState(false);

  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided) => {
        return (
          <ColumnWrapper {...provided.draggableProps} ref={provided.innerRef}>
            <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
              <TitleStyled {...provided.dragHandleProps}>{column.title}</TitleStyled>
              <span
                style={{ fontSize: '26px', fontWeight: '600', cursor: 'pointer' }}
                onClick={() => srtTogle(!togle)}
              >
                ...
              </span>
              {togle ? (
                <Settings>
                  <SettingsButton style={{ background: 'rgb(41 76 43)' }}>
                    Изменить название
                  </SettingsButton>
                  <SettingsButton style={{ background: 'rgb(190 33 33)' }}>
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
                              <CardStyled
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                {task.content}
                              </CardStyled>
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
