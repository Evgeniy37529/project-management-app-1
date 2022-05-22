import { FC } from 'react';
import BoardsColumn from '../boardColumn/boardsColumn';
import { AddColumn, AddColumnWrapper, BoardWrapperStyled } from './styled';
import { exampleCardObj } from '../../../../constants/boardCardConst';
import { exampleCardObjSecond } from '../../../../constants/boardCardConst';
import { ReactComponent as Plus } from '../../../../assets/svg/plus.svg';
import { useTranslation } from 'react-i18next';

const BoardWrapper: FC = () => {
  const { t } = useTranslation();
  return (
    <BoardWrapperStyled>
      <BoardsColumn {...exampleCardObj} />
      <BoardsColumn {...exampleCardObj} />
      <BoardsColumn {...exampleCardObjSecond} />
      <AddColumnWrapper>
        <Plus style={{ marginRight: '10px' }} />
        <AddColumn>{t('boards.add_column')}</AddColumn>
      </AddColumnWrapper>
    </BoardWrapperStyled>
  );
};

export default BoardWrapper;
