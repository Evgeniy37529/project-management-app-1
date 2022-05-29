import { Button, Modal } from 'antd';
import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { columnDeleteById, deleteColumn } from '../../store/reducers/columns';
import { deleteTask, taskDeleteById } from '../../store/reducers/tasks';
import { AppDispatch } from '../../store/store';
import { useParams } from 'react-router-dom';
import { deleteBoard } from '../../store/reducers/boards';

interface Props {
  title: string;
  type: string;
  taskId: string;
  columnId: string;
  boardId: string;
}

const CustomModal: FC<Props> = ({ title, type, columnId, taskId, boardId }) => {
  const dispatch = useDispatch<AppDispatch>();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleOk = () => {
    setIsModalVisible(false);

    if (type === 'column') {
      if (boardId) dispatch(deleteColumn({ boardId, columnId }));
      dispatch(columnDeleteById(columnId));
    } else if (type === 'item') {
      if (boardId) dispatch(deleteTask({ boardId, columnId: columnId, taskId: taskId }));
      dispatch(taskDeleteById(taskId));
    } else if (type === 'boards') {
      if (boardId) dispatch(deleteBoard(boardId));
    }
  };

  return (
    <>
      <Button
        onClick={showModal}
        style={{
          background: 'transparent',
          border: 'none',
          fontSize: '20px',
          padding: '0'
        }}
      >
        ...
      </Button>
      <Modal
        title="Подтвердите удаление"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Удалить {title}?</p>
      </Modal>
    </>
  );
};

export default CustomModal;
