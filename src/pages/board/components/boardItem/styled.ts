import styled from 'styled-components';

export const CardStyled = styled.div`
  position: relative;
  border-bottom: 5px solid #e5e5e5;
  padding: 8px;
  border-radius: 5px 5px 8px 8px;
  background: white;
  word-wrap: break-word;
  color: #5c4f4f;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    background: #dbd5d5;
  }
`;
export const CardTitle = styled.div``;
export const CardCross = styled.div`
  position: absolute;
  top: 8px;
  right: 5px;
`;
