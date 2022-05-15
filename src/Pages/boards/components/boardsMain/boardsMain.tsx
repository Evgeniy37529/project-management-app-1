import { FC } from 'react';
import { BoardsHeader, BoardsList, Flex } from './styled';
import { ReactComponent as Open } from '../../../../assets/svg/open.svg';
import { ReactComponent as Close } from '../../../../assets/svg/close.svg';
import BoardsItem from '../boardsItem/boardsItem';
import { exampleLiItems } from '../../../../conts/boarsMainConst';
import { useTranslation } from 'react-i18next';

const BoardsMain: FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <BoardsHeader>
        <Flex>
          <Open style={{ marginRight: '10px' }} />
          {` 0 `}
          {t('boards.open')}
        </Flex>
        <Flex>
          <Close style={{ marginRight: '10px' }} />
          {` 0 `}
          {t('boards.close')}
        </Flex>
      </BoardsHeader>
      <BoardsList>
        {exampleLiItems.map(({ title, description }, i) => (
          <BoardsItem key={i} title={title} description={description} />
        ))}
      </BoardsList>
    </>
  );
};

export default BoardsMain;
