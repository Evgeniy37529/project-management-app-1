import { FC, useEffect } from 'react';
import BoardWrapper from './components/boardWrapper/boardWrapper';
import { BoardName } from './styled';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Board: FC = () => {
  const { t } = useTranslation();
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    !token && navigate('/');
  }, [token]);

  return (
    <>
      <BoardName>{t('boards.board_title')}</BoardName>
      <BoardWrapper />
    </>
  );
};

export default Board;
