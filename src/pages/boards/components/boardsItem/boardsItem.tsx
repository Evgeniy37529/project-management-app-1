import { FC } from 'react';
import { BoardsItemStyled, ShortField } from './styled';
import { ReactComponent as Trash } from '../../../../assets/svg/trash.svg';

interface Props {
  title: string;
  description: string;
}

const BoardsItem: FC<Props> = ({ title, description }) => {
  return (
    <BoardsItemStyled>
      <ShortField>{title}</ShortField>
      <ShortField style={{ width: '300px' }}>{description}</ShortField>
      <ShortField>
        <Trash style={{ cursor: 'pointer' }} />
      </ShortField>
    </BoardsItemStyled>
  );
};

export default BoardsItem;
