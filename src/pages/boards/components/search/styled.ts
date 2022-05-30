import styled from 'styled-components';

export const InputStyled = styled.input`
  padding: 10px 15px 10px 50px;
  min-width: 250px;
  max-width: 300px;
  height: 50px;
  background: #d1d1d1;
  border-radius: 8px;
  border: none;
  font-size: 20px;

  &:focus {
    outline: none;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  padding: 20px 20px 0 20px;
`;
