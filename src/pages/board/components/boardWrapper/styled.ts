import styled from 'styled-components';

export const BoardWrapperStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 575px;
  margin: 30px;
  padding: 0 30px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    height: 8px;
    background-color: #e5e5e5;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(31, 112, 127, 0.5);
    border-radius: 20px;
  }
  @media (max-width: 1000px) {
    overflow-y: scroll;
    flex-direction: column;
    overflow-x: hidden;
  }
`;

export const AddColumnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  min-width: 300px;
  height: 80px;
  padding: 8px 5px;
  cursor: pointer;
  border-radius: 10px;
  transition: all 0.3s;
  background: #e5e5e5;

  &:hover {
    background: #cacaca;
  }
`;

export const AddColumn = styled.div`
  font-weight: 400;
  font-size: 23px;
  color: #aeaeae;
`;
