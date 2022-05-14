import { FC } from 'react';
import { BoardsHeader, BoardsList, Flex } from './styled';
import { ReactComponent as Open } from '../../../../assets/svg/open.svg';
import { ReactComponent as Close } from '../../../../assets/svg/close.svg';
import BoardsItem from '../boardsItem/boardsItem';

const exampleLiItems = [
  {
    title: 'it is title',
    description: 'not long description'
  },
  {
    title: 'it is long long long title',
    description: 'long long long long long long long long long long long description'
  },
  {
    title: 'it is title',
    description:
      'long long long long long long long long long long long description long long long long long long long long long long long description long long long long long long long long long long long description'
  },
  {
    title: 'it is title',
    description: 'not long description'
  },
  {
    title: 'it is title',
    description: 'not long description'
  },
  {
    title: 'it is title',
    description: 'not long description'
  },
  {
    title: 'it is title',
    description: 'not long description'
  },
  {
    title: 'it is title',
    description: 'not long description'
  },
  {
    title: 'it is title',
    description: 'not long description'
  },
  {
    title: 'it is title',
    description: 'not long description'
  }
];

const BoardsMain: FC = () => {
  return (
    <>
      <BoardsHeader>
        <Flex>
          <Open style={{ marginRight: '10px' }} />
          {` 0 `}
          открыто
        </Flex>
        <Flex>
          <Close style={{ marginRight: '10px' }} />
          {` 0 `}
          закрыто
        </Flex>
      </BoardsHeader>
      <BoardsList>
        {exampleLiItems.map((elem, i) => (
          <BoardsItem key={i} title={elem.title} description={elem.description} />
        ))}
      </BoardsList>
    </>
  );
};

export default BoardsMain;
