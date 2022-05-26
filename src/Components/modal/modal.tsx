import { Modal } from 'antd';
import { FC } from 'react';
import { Data } from '../../Pages/board/components/boardWrapper/boardWrapper';

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
  const handleOk = () => {
    setIsModalVisible(false);
    if (type === 'column' && currentState && setNewState) {
      const newState = JSON.parse(JSON.stringify(currentState));
      delete newState.columns[columnId];
      newState.columnOrder.splice(newState.columnOrder.indexOf(columnId), 1);
      setNewState(newState);
    } else if (type === 'item' && currentState && setNewState) {
      const newState = JSON.parse(JSON.stringify(currentState));
      delete newState.tasks[taskId];
      newState.columns[columnId].taskIds.splice(
        newState.columns[columnId].taskIds.indexOf(taskId),
        1
      );
      setNewState(newState);
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
