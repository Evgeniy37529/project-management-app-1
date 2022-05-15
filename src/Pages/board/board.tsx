import { FC } from 'react';
import BoardWrapper from './components/boardWrapper/boardWrapper';
import { BoardName } from './styled';
import { useTranslation } from 'react-i18next';

const Board: FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <BoardName>{t('boards.board_title')}</BoardName>
      <BoardWrapper />
    </>
  );
};

export default Board;
