import styled from 'styled-components';

export const BoardsItemStyled = styled.li`
  margin: 0 30px 30px 30px;
  padding: 10px;
  white-space: nowrap;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  background: #fff;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background: #c4c4c4;
  }
`;

export const ShortField = styled.div`
  text-align: left;
  width: 30%;
  height: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  svg {
    position: absolute;
    right: 10px;
  }
`;
