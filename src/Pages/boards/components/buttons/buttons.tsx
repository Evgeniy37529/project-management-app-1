import { FC } from 'react';
import { ButtonWrapper, ButtonStyle, SelectStyle } from './styled';
const Buttons: FC = () => {
  return (
    <ButtonWrapper>
      <ButtonStyle color="#FFB800">Edit profile</ButtonStyle>
      <ButtonStyle color="#347D39">Create new board</ButtonStyle>
      <SelectStyle defaultValue="" color="#676DFF">
        <option value="" disabled>
          Change language...
        </option>
        <option value="ua">Ukr</option>
        <option value="eng">Eng</option>
        <option value="ru">Ru</option>
      </SelectStyle>
      <ButtonStyle color="#FF0000">Sign out</ButtonStyle>
    </ButtonWrapper>
  );
};

export default Buttons;
