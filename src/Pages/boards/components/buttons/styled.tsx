import styled from 'styled-components';

type ButtonStyle = {
  color: string;
};

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background: #eaf5ff;
`;

export const ButtonStyle = styled.button`
  margin: 0 30px 0 0;
  border-radius: 5px;
  background: ${(props: ButtonStyle) => (props.color ? props.color : '#1890ff')};
  color: white;
  padding: 7px 15px;
  font-size: 14px;
  cursor: pointer;
  border: 1px solid ${(props: ButtonStyle) => (props.color ? props.color : '#1890ff')};
  transition: all 0.2s;

  &:hover {
    color: black;
  }
`;

export const SelectStyle = styled.select`
  margin: 0 30px 0 0;
  border-radius: 5px;
  background: ${(props: ButtonStyle) => (props.color ? props.color : '#1890ff')};
  color: white;
  padding: 7px 15px;
  font-size: 14px;
  cursor: pointer;
  border: 1px solid ${(props: ButtonStyle) => (props.color ? props.color : '#1890ff')};
  transition: all 0.2s;

  &:hover {
    color: black;
  }
`;
