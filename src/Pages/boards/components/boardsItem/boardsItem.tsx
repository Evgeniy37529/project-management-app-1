import React, { FC, useState } from 'react';
import { BoardsItemStyled, ShortField } from './styled';
import { ReactComponent as Trash } from '../../../../assets/svg/trash.svg';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../store/store';
import { boardsChangeDelete, deleteBoard } from '../../../../store/reducers/boardsReducer';
import { loadBoards } from '../../../../store/reducers/boardsReducer';

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

  return (
    <BoardsItemStyled id={id}>
      <ShortField>{title}</ShortField>
      <ShortField style={{ width: '300px' }}>{description}</ShortField>
      <ShortField>
        <Trash style={{ cursor: 'pointer' }} onClick={deleteCurrentBoard} />
      </ShortField>
    </BoardsItemStyled>
  );
};

export default React.memo(BoardsItem);
