import { FC, useState } from 'react';
import { BoardsItemStyled, ShortField } from './styled';
import { ReactComponent as Trash } from '../../../../assets/svg/trash.svg';
import CustomModal from '../../../../Components/modal/modal';

interface Props {
  title: string;
  description: string;
}

const BoardsItem: FC<Props> = ({ title, description }) => {
  const [modalVisible, setIsModalVisible] = useState(false);

  return (
    <BoardsItemStyled>
      <CustomModal
        modalVisible={modalVisible}
        setIsModalVisible={(toggle: boolean) => setIsModalVisible(toggle)}
        title={title}
        type="boards"
        currentState={null}
        setNewState={null}
        taskId=""
        columnId=""
      />
      <ShortField>{title}</ShortField>
      <ShortField style={{ width: '300px' }}>{description}</ShortField>
      <ShortField>
        <Trash onClick={() => setIsModalVisible(true)} style={{ cursor: 'pointer' }} />
      </ShortField>
    </BoardsItemStyled>
  );
};

export default BoardsItem;
