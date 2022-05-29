import styled from 'styled-components';

export const BoardsHeader = styled.div`
  margin: 10px 20px 0 20px;
  padding: 0 100px;
  height: 84px;
  display: flex;
  align-items: center;
  background: #c4c4c4;
  border-radius: 15px 12px 1px 1px;
  font-weight: bold;
  font-size: 18px;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
`;

export const BoardsList = styled.ul`
  margin: 0 20px;
  padding: 30px 50px;
  height: 475px;
  background: #e5e5e5;
  border-radius: 1px 1px 12px 12px;
  list-style-type: none;
  overflow-y: scroll;
`;
