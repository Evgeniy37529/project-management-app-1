import React, { useState, FocusEvent } from 'react';
import {
  BlockModalWindow,
  BoardDescriptionPlace,
  BoardNamePlace,
  ButtonAddBoard,
  ButtonCloseModal
} from './style';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { createBoard } from '../../store/reducers/boardsReducer';
import { Spin } from 'antd';

const ModalWindowCreateBoard = ({
  visible,
  changeVisible
}: {
  visible: boolean;
  changeVisible: () => void;
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { status } = useSelector((state: RootState) => state.board);

  const changeTitle = (ev: FocusEvent<HTMLInputElement>) => {
    setTitle(ev.target.value);
  };
  const changeDescription = (ev: FocusEvent<HTMLInputElement>) => {
    setDescription(ev.target.value);
  };
  const dispatch = useDispatch<AppDispatch>();
  const postCreateBord = () => {
    dispatch(createBoard({ title, description }));
    changeVisible();
  };
  return (
    <BlockModalWindow visible={visible}>
      <ButtonCloseModal onClick={changeVisible} />
      <BoardNamePlace placeholder="Enter board name" onBlur={changeTitle} />
      <BoardDescriptionPlace placeholder="Enter board description" onBlur={changeDescription} />
      {status === 'loading' ? (
        <Spin />
      ) : (
        <ButtonAddBoard onClick={postCreateBord}>create</ButtonAddBoard>
      )}
    </BlockModalWindow>
  );
};
export default ModalWindowCreateBoard;
