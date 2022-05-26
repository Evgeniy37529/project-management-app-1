import { FC, useState } from 'react';
import { BoardsItemStyled, ShortField } from './styled';
import { ReactComponent as Trash } from '../../../../assets/svg/trash.svg';
import CustomModal from '../../../../components/modal/modal';
import { Link } from 'react-router-dom';
import { AppDispatch } from '../../../../store/store';
import { useDispatch } from 'react-redux';
import { deleteBoard, getBoardById } from '../../../../store/reducers/boards';
getBoardById;

interface Props {
  id: string;
  title: string;
  description: string;
}

const BoardsItem: FC<Props> = ({ id, title, description }) => {
  const [modalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const deleteCurrentBoard = () => {
    dispatch(deleteBoard(id));
  };
  const requestCurrentInfoBoard = () => {
    dispatch(getBoardById(id));
  };
  return (
    <BoardsItemStyled id={id}>
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
      <Link to={`/boards/${id}`}>
        <ShortField onClick={requestCurrentInfoBoard}>{title}</ShortField>
      </Link>
      <ShortField style={{ width: '300px' }}>{description}</ShortField>
      <ShortField>
        <Trash style={{ cursor: 'pointer' }} onClick={deleteCurrentBoard} />
      </ShortField>
    </BoardsItemStyled>
  );
};

export default BoardsItem;
