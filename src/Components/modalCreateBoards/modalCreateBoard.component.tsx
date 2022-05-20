import React, { useState, FocusEvent } from 'react';
import { BlockModalWindow, BoardNamePlace, ButtonAddBoard, ButtonCloseModal } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { createBoard } from '../../store/reducers/boardReducer';
import { Spin } from 'antd';
import { loadBoards } from '../../store/reducers/boardsReducer';

const ModalWindowCreateBoard = ({
  visible,
  changeVisible
}: {
  visible: boolean;
  changeVisible: () => void;
}) => {
  const [title, setTitle] = useState('');
  const { status } = useSelector((state: RootState) => state.board);

  const changeTitle = (ev: FocusEvent<HTMLInputElement>) => {
    setTitle(ev.target.value);
  };
  const dispatch = useDispatch<AppDispatch>();
  const postCreateBord = () => {
    dispatch(createBoard(title));
    changeVisible();
    dispatch(loadBoards());
  };
  return (
    <BlockModalWindow visible={visible}>
      <ButtonCloseModal onClick={changeVisible} />
      <BoardNamePlace placeholder="Enter board name" onBlur={changeTitle} />
      {status === 'loading' ? (
        <Spin />
      ) : (
        <ButtonAddBoard onClick={postCreateBord}>create</ButtonAddBoard>
      )}
    </BlockModalWindow>
  );
};
export default ModalWindowCreateBoard;
