import { FC } from 'react';
import BoardsMain from './components/boardsMain/boardsMain';
import Search from './components/search/search';

const Boards: FC = () => {
  return (
    <>
      <Search />
      <BoardsMain />
    </>
  );
};

export default Boards;
