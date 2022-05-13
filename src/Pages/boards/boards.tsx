import { FC } from 'react';
import BoardsMain from './components/boardsMain/boardsMain';
import Buttons from './components/buttons/buttons';
import Search from './components/search/search';

const Boards: FC = () => {
  return (
    <>
      <Buttons />
      <Search />
      <BoardsMain />
    </>
  );
};

export default Boards;
