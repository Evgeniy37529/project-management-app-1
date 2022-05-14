import { FC } from 'react';
import BoardsColumn from '../boardColumn/boardsColumn';
import { AddColumn, AddColumnWrapper, BoardWrapperStyled } from './styled';
import { exampleCardObj } from '../../../../conts/boardCardConst';
import { exampleCardObjSecond } from '../../../../conts/boardCardConst';
import { ReactComponent as Plus } from '../../../../assets/svg/plus.svg';

const BoardWrapper: FC = () => {
  return (
    <BoardWrapperStyled>
      <BoardsColumn {...exampleCardObj} />
      <BoardsColumn {...exampleCardObj} />
      <BoardsColumn {...exampleCardObjSecond} />
      <AddColumnWrapper>
        <Plus style={{ marginRight: '10px' }} />
        <AddColumn>Добавить колонку</AddColumn>
      </AddColumnWrapper>
    </BoardWrapperStyled>
  );
};

export default BoardWrapper;
