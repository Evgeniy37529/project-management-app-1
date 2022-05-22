import { FC, useState } from 'react';
import {
  AddCard,
  AddCardWrapper,
  CardStyled,
  ColumnWrapper,
  Settings,
  SettingsButton,
  TitleStyled
} from './styled';
import { ReactComponent as Plus } from '../../../../assets/svg/plus.svg';

interface Props {
  title: string;
  info: string[];
}

const BoardsColumn: FC<Props> = ({ title, info }) => {
  const [togle, srtTogle] = useState(false);

  return (
    <ColumnWrapper>
      <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
        <TitleStyled>{title}</TitleStyled>
        <span
          style={{ fontSize: '26px', fontWeight: '600', cursor: 'pointer' }}
          onClick={() => srtTogle(!togle)}
        >
          ...
        </span>
        {togle ? (
          <Settings>
            <SettingsButton style={{ background: 'rgb(41 76 43)' }}>
              Изменить название
            </SettingsButton>
            <SettingsButton style={{ background: 'rgb(190 33 33)' }}>
              Удалить таблицу
            </SettingsButton>
          </Settings>
        ) : null}
      </div>
      {info.map((text, i) => (
        <CardStyled key={i}>{text}</CardStyled>
      ))}
      <AddCardWrapper>
        <Plus />
        <AddCard>Добавить карточку</AddCard>
      </AddCardWrapper>
    </ColumnWrapper>
  );
};

export default BoardsColumn;
