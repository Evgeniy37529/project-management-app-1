import { FC, useState } from 'react';
import { DraggableProvided } from 'react-beautiful-dnd';
import CustomModal from '../../../../components/modal/modal';
import { Data } from '../boardWrapper/boardWrapper';
import { CardCross, CardStyled } from './styled';

interface Props {
  provided: DraggableProvided;
  task: {
    id: string;
    content: string;
  };
  column: {
    id: string;
    title: string;
    taskIds: string[];
  };
  currentState: Data;
  setNewState: (newState: Data) => void;
}

const BoardItem: FC<Props> = ({ currentState, setNewState, provided, task, column }) => {
  const [show, setShow] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <CardStyled
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {task.content}
      <CardCross
        onClick={() => setModalVisible(true)}
        style={{ display: `${show ? 'block' : 'none'}` }}
      >
        &#10060;
      </CardCross>
      <CustomModal
        modalVisible={modalVisible}
        setIsModalVisible={(toggle: boolean) => setModalVisible(toggle)}
        currentState={currentState}
        setNewState={setNewState}
        columnId={column.id}
        taskId={task.id}
        title={task.content}
        type="item"
      />
    </CardStyled>
  );
};

export default BoardItem;
