import React, { FC } from 'react';
import { BoardsItemStyled, ShortField } from './styled';
import { ReactComponent as Trash } from '../../../../assets/svg/trash.svg';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../store/store';
import { deleteBoard } from '../../../../store/reducers/boardReducer';
import { loadBoards } from '../../../../store/reducers/boardsReducer';

interface Props {
  title: string;
  id: string;
}

const BoardsItem: FC<Props> = ({ id, title }) => {
  const dispatch = useDispatch<AppDispatch>();
  const deleteCurrentBoard = () => {
    dispatch(deleteBoard(id));
    dispatch(loadBoards());
  };
  return (
    <BoardsItemStyled id={id}>
      <ShortField>{title}</ShortField>
      <ShortField>
        <Trash style={{ cursor: 'pointer' }} onClick={deleteCurrentBoard} />
      </ShortField>
    </BoardsItemStyled>
  );
};

export default React.memo(BoardsItem);
