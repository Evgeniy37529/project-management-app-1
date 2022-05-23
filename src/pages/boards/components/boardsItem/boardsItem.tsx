import React, { FC } from 'react';
import { BoardsItemStyled, ShortField } from './styled';
import { ReactComponent as Trash } from '../../../../assets/svg/trash.svg';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../store/store';
import { deleteBoard, getBoardById } from '../../../../store/reducers/boards';
import { Link } from 'react-router-dom';
import { PropsBoardsItem } from '../../../../types/boards';

const BoardsItem: FC<PropsBoardsItem> = ({ id, title, description }) => {
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
        <ShortField onClick={requestCurrentInfoBoard} style={{ width: '100%' }}>
          {title}
        </ShortField>
      </Link>
      <ShortField style={{ width: '300px' }}>{description}</ShortField>
      <ShortField>
        <Trash style={{ cursor: 'pointer' }} onClick={deleteCurrentBoard} />
      </ShortField>
    </BoardsItemStyled>
  );
};

export default React.memo(BoardsItem);
