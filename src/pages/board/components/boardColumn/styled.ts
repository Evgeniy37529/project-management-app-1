import styled from 'styled-components';

export const ColumnWrapper = styled.div`
  max-height: 550px;
  background: #e5e5e5;
  border-radius: 12px;
  margin-right: 40px;
  padding: 20px;

  &::-webkit-scrollbar {
    width: 8px;
    background-color: #e5e5e5;
    border-radius: 0 20px 20px 0;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(31, 112, 127, 0.5);
    border-radius: 0 20px 20px 0;
  }
  @media (max-width: 1000px) {
    margin-bottom: 30px;
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
  padding: 7px 14px;
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
export const BlockAddColumn = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ButtonAddColumn = styled.button<{ disabled: boolean }>`
  background-image: url('https://www.svgrepo.com/show/158372/plus.svg');
  background-repeat: no-repeat;
  display: ${(props) => (props.disabled ? 'none' : 'flex')};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  border: none;
  transition: 1s;
  margin-right: 10px;
  &:hover {
    background-image: url('https://www.svgrepo.com/show/157858/plus.svg');
    cursor: pointer;
  }
`;
export const NextColumnWrapper = styled.div`
  max-height: 150px;
  background: #e5e5e5;
  border-radius: 12px;
  margin-right: 40px;
  padding: 0 20px 20px 0;

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
export const BlockAddCard = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const EntryFieldCardTitle = styled.input`
  border: none;
  width: 85%;
  background: transparent;
`;
export const SaveButtonCardTitle = styled.div<{ disabled: boolean }>`
  background-image: url('https://www.svgrepo.com/show/98375/save.svg');
  background-repeat: no-repeat;
  display: ${(props) => (props.disabled ? 'none' : 'flex')};
  width: 25px;
  height: 25px;
  border: none;
  transition: 1s;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
