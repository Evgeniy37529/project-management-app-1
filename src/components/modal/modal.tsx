import { Button, Modal } from 'antd';
import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { columnDeleteById, deleteColumn } from '../../store/reducers/columns';
import { deleteTask, taskDeleteById } from '../../store/reducers/tasks';
import { AppDispatch } from '../../store/store';
import { useNavigate } from 'react-router-dom';
import { deleteBoard } from '../../store/reducers/boards';
import { eraseUser, userSlice } from '../../store/reducers/user';
import { useTranslation } from 'react-i18next';

interface Props {
  title: string;
  type: string;
  taskId: string;
  columnId: string;
  boardId: string;
  userId: string;
}

const CustomModal: FC<Props> = ({ title, type, columnId, taskId, boardId, userId }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { t } = useTranslation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { defaultStatus } = userSlice.actions;
  const navigate = useNavigate();

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
    } else if (type === 'user') {
      dispatch(eraseUser(userId))
        .then(() => dispatch(defaultStatus()))
        .then(() => localStorage.removeItem('token'))
        .then(() => navigate('/'));
    }
  };

  return (
    <>
      <Button
        danger={userId ? true : false}
        type={userId ? 'primary' : 'text'}
        onClick={showModal}
        style={{
          background: !userId ? 'transparent' : '',
          border: 'none',
          fontSize: !userId ? '20px' : '',
          padding: !userId ? '0px' : ''
        }}
      >
        {userId ? t('editProfile.delete_user') : '...'}
      </Button>
      <Modal
        title={t('modalDelete.confirmDeletion')}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>
          {t('modalDelete.delete')} {userId && t('modalDelete.user')} {title}?
        </p>
      </Modal>
    </>
  );
};

export default CustomModal;
