import { FC } from 'react';
import BoardWrapper from './components/boardWrapper/boardWrapper';
import { BoardName } from './styled';

const Board: FC = () => {
  return (
    <>
      <BoardName>Board title</BoardName>
      <BoardWrapper />
    </>
  );
};

export default Board;
