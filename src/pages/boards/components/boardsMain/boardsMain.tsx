import { FC, useEffect } from 'react';
import { BoardsHeader, BoardsList, Flex } from './styled';
import { ReactComponent as Open } from '../../../../assets/svg/open.svg';
import BoardsItem from '../boardsItem/boardsItem';
import { AppDispatch } from '../../../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { loadBoards } from '../../../../store/reducers/boards';
import { useTranslation } from 'react-i18next';
import { boardsSelector } from '../../../../store/selectors/boards';

const BoardsMain: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { boards } = useSelector(boardsSelector);
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(loadBoards());
  }, [dispatch]);
  return (
    <>
      <BoardsHeader>
        <Flex>
          <Open style={{ marginRight: '10px' }} />
          {` ${boards.length} `}
          {t('boards.open')}
        </Flex>
      </BoardsHeader>
      <BoardsList>
        {boards.map(({ id, title, description }) => (
          <BoardsItem key={title} title={title} id={id} description={description} />
        ))}
      </BoardsList>
    </>
  );
};

export default BoardsMain;
