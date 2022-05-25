import styled from 'styled-components';
export const BlockModalWindow = styled.div<{ visible: boolean }>`
  position: fixed;
  width: 50vw;
  height: 50vh;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  left: 25%;
  top: 25%;
  border-radius: 13px;
  border: 1px solid gray;
  justify-content: center;
  z-index: 3;
`;
export const BoardNamePlace = styled.input`
  padding-left: 10px;
  border-radius: 13px;
  border: 1px solid gray;
  width: 90%;
  height: 50px;
  margin-bottom: 20px;
`;
export const BoardDescriptionPlace = styled.input`
  padding-left: 10px;
  border-radius: 13px;
  border: 1px solid gray;
  width: 90%;
  height: 50px;
  margin-bottom: 20px;
`;
export const ButtonAddBoard = styled.button`
  border-radius: 50px;
  border: none;
  color: white;
  background: green;
  width: 100px;
  height: 50px;
  transition: 1s;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
export const ButtonCloseModal = styled.button`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  background-size: contain;
  background: transparent url('https://www.svgrepo.com/show/274372/close.svg') no-repeat;
  transition: 1s;
  &:hover {
    background: transparent url('https://www.svgrepo.com/show/273966/close.svg') no-repeat;
    cursor: pointer;
    color: red;
    transform: scale(1.1);
  }
`;
