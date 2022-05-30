import { FC, useEffect } from 'react';
import BoardsMain from './components/boardsMain/boardsMain';
import Search from './components/search/search';
import { useNavigate } from 'react-router-dom';

const Boards: FC = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    !token && navigate('/');
  }, [token]);

  return (
    <>
      <Search />
      <BoardsMain />
    </>
  );
};

export default Boards;
