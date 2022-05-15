import { FC, useState } from 'react';
import { InputStyled, InputWrapper } from './styled';
import { ReactComponent as SearchImage } from '../../../../assets/svg/search.svg';

const Search: FC = () => {
  const [value, setValue] = useState('');

  return (
    <InputWrapper>
      <InputStyled type="search" value={value} onChange={(e) => setValue(e.target.value)} />
      <SearchImage
        style={{ position: 'absolute', width: '30px', height: '30px', top: '30px', left: '30px' }}
      />
    </InputWrapper>
  );
};

export default Search;
