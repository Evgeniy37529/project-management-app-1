import React, { FC, useState } from 'react';
import { BoardsItemStyled, ShortField } from './styled';
import { ReactComponent as Trash } from '../../../../assets/svg/trash.svg';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../store/store';
import {
  boardsChangeDelete,
  deleteBoard,
  getBoardById
} from '../../../../store/reducers/boardsReducer';
import { loadBoards } from '../../../../store/reducers/boardsReducer';
import { Link, useParams } from 'react-router-dom';
import Board from '../../../board/board';

interface Props {
  title: string;
  id: string;
  description: string;
}

const BoardsItem: FC<Props> = ({ id, title, description }) => {
  const dispatch = useDispatch<AppDispatch>();
  const deleteCurrentBoard = () => {
    dispatch(deleteBoard(id));
    dispatch(boardsChangeDelete(id));
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

export default React.memo(BoardsItem);
