import { Modal } from 'antd';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Data } from '../../pages/board/components/boardWrapper/boardWrapper';
import { deleteColumn } from '../../store/reducers/columns';
import { deleteTask } from '../../store/reducers/tasks';
import { AppDispatch } from '../../store/store';

interface Props {
  modalVisible: boolean;
  setIsModalVisible: (toggle: boolean) => void;
  title: string;
  type: string;
  currentState: Data | null;
  taskId: string;
  columnId: string;
  setNewState: ((newState: Data) => void) | null;
}

const CustomModal: FC<Props> = ({
  currentState,
  setNewState,
  modalVisible,
  setIsModalVisible,
  title,
  type,
  columnId,
  taskId
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleOk = () => {
    setIsModalVisible(false);
    if (type === 'column' && currentState && setNewState) {
      dispatch(deleteColumn(columnId));
      // const newState = JSON.parse(JSON.stringify(currentState));
      // delete newState.columns[columnId];
      // newState.columnOrder.splice(newState.columnOrder.indexOf(columnId), 1);
      // setNewState(newState);
    } else if (type === 'item' && currentState && setNewState) {
      dispatch(deleteTask({ columnId: columnId, taskId: taskId }));
      // const newState = JSON.parse(JSON.stringify(currentState));
      // delete newState.tasks[taskId];
      // newState.columns[columnId].taskIds.splice(
      //   newState.columns[columnId].taskIds.indexOf(taskId),
      //   1
      // );
      // setNewState(newState);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal
        title="Подтверждение удаления"
        visible={modalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Вы действительно хотите удалить {title}?</p>
      </Modal>
    </>
  );
};

export default CustomModal;
