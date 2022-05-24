import { FC } from 'react';
import { BoardsItemStyled, ShortField } from './styled';
import { ReactComponent as Trash } from '../../../../assets/svg/trash.svg';
import { Link } from 'react-router-dom';
import { deleteBoard } from '../../../../store/reducers/boards';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../store/store';
import { getBoardById } from '../../../../store/reducers/boards';

interface Props {
  id: string;
  title: string;
  description: string;
}

const BoardsItem: FC<Props> = ({ id, title, description }) => {
  const dispatch = useDispatch<AppDispatch>();
  const deleteCurrentBoard = () => {
    dispatch(deleteBoard(id));
  };
  const requestCurrentInfoBoard = () => {
    dispatch(getBoardById(id));
  };
  return (
    <BoardsItemStyled id={id}>
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
