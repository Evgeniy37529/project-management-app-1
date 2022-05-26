import styled from 'styled-components';

export const ColumnWrapper = styled.div`
  min-width: 300px;
  width: 300px;
  max-height: 550px;
  background: #e5e5e5;
  border-radius: 12px;
  margin-right: 40px;
  padding: 20px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 8px;
    background-color: #e5e5e5;
    border-radius: 0 20px 20px 0;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(31, 112, 127, 0.5);
    border-radius: 0 20px 20px 0;
  }
`;

export const TitleStyled = styled.h3`
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  font-weight: 600;
  font-size: 20px;
  color: #000;
`;

export const AddCardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 8px 5px;
  cursor: pointer;
  border-radius: 15px;
  transition: all 0.3s;

  &:hover {
    background: #cacaca;
  }
`;

export const AddCard = styled.div`
  font-weight: 400;
  font-size: 23px;
  color: #aeaeae;
`;

export const Settings = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: -18px;
  top: -20px;
`;

export const SettingsButton = styled.button`
  border: none;
  padding 7px 14px;
  color: white;
  margin: 5px 0 0 0;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: #000;
  }
`;

export const TaskList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  min-height: 5px;
`;
