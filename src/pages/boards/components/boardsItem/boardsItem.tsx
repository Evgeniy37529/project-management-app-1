import { FC, useEffect } from 'react';
import { BoardsItemStyled, ShortField } from './styled';
import CustomModal from '../../../../components/modal/modal';
import { Link } from 'react-router-dom';
import { AppDispatch } from '../../../../store/store';
import { useDispatch } from 'react-redux';
import { getBoardById } from '../../../../store/reducers/boards';

interface Props {
  id: string;
  title: string;
  description: string;
}

const BoardsItem: FC<Props> = ({ id, title, description }) => {
  const dispatch = useDispatch<AppDispatch>();
  const requestCurrentInfoBoard = () => {
    dispatch(getBoardById(id));
  };

  useEffect(() => {
    localStorage.setItem('currentBoardId', id);
  }, [id]);

  return (
    <BoardsItemStyled id={id}>
      <Link to={`/boards/${id}`}>
        <ShortField onClick={requestCurrentInfoBoard}>{title}</ShortField>
      </Link>
      <ShortField>{description}</ShortField>
      <ShortField>
        <CustomModal title={title} type="boards" taskId="" columnId="" boardId={id} userId="" />
      </ShortField>
    </BoardsItemStyled>
  );
};

export default BoardsItem;
