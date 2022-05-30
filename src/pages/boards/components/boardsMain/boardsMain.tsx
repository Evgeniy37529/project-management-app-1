import { FC, useEffect } from 'react';
import { BoardsHeader, BoardsList, Flex } from './styled';
import { ReactComponent as Open } from '../../../../assets/svg/open.svg';
import BoardsItem from '../boardsItem/boardsItem';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { boardsSelector } from '../../../../store/selectors/boards';
import { AppDispatch } from '../../../../store/store';
import { loadBoards } from '../../../../store/reducers/boards';

const BoardsMain: FC = () => {
  const { t } = useTranslation();
  const { boards } = useSelector(boardsSelector);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(loadBoards());
  }, []);
  return (
    <>
      <BoardsHeader>
        <Flex>
          <Open style={{ marginRight: '10px' }} />
          {` ${boards.length} `}
        </Flex>
      </BoardsHeader>
      <BoardsList>
        {boards.map(({ id, title, description }, i) => (
          <BoardsItem id={id} key={i} title={title} description={description} />
        ))}
      </BoardsList>
    </>
  );
};

export default BoardsMain;
