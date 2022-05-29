import { FC, FocusEvent, useEffect, useState } from 'react';
import BoardsColumn from '../boardColumn/boardsColumn';
import { AddColumn, AddColumnWrapper, BoardWrapperStyled } from './styled';
import { ReactComponent as Plus } from '../../../../assets/svg/plus.svg';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../store/store';
import { columnsSelector } from '../../../../store/selectors/columns';
import { createColumns, getAllColumns } from '../../../../store/reducers/columns';
import { useParams } from 'react-router-dom';
import {
  BlockAddColumn,
  ButtonAddColumn,
  EntryFieldCardTitle,
  NextColumnWrapper,
  SaveButtonCardTitle
} from '../boardColumn/styled';

export interface Data {
  tasks: { [key: string]: { id: string; content: string } };
  columns: { [key: string]: { id: string; title: string; taskIds: string[] } };
  columnOrder: string[];
}

const BoardWrapper: FC = () => {
  const { t } = useTranslation();
  const { columns } = useSelector(columnsSelector);
  const [disabled, setDisabled] = useState(false);
  const [columnTitle, setColumnTitle] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const boardId = useParams().id;

  const disableChange = () => {
    setDisabled(!disabled);
  };
  const nameEntryTask = (ev: FocusEvent<HTMLInputElement>) => {
    setColumnTitle(ev.target.value);
  };
  const addNewColumn = () => {
    if (boardId) dispatch(createColumns({ boardId, title: columnTitle }));
    disableChange();
  };
  useEffect(() => {
    if (boardId) dispatch(getAllColumns(boardId));
  }, [dispatch]);

  return (
    <BoardWrapperStyled>
      {columns.map((el) => (
        <BoardsColumn column={el} key={el.id} />
      ))}

      <NextColumnWrapper style={{ paddingLeft: '20px' }}>
        <BlockAddColumn>
          <ButtonAddColumn onClick={disableChange} disabled={disabled} />
          <EntryFieldCardTitle
            ref={(input) => input && input.focus()}
            type="text"
            onChange={nameEntryTask}
            disabled={!disabled}
            placeholder={disabled ? 'Введите текст' : 'Добавить колонку'}
          />
          <SaveButtonCardTitle disabled={!disabled} onClick={addNewColumn} />
        </BlockAddColumn>
      </NextColumnWrapper>
    </BoardWrapperStyled>
  );
};

export default BoardWrapper;
