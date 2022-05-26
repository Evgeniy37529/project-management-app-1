import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const ModalInner = styled.div`
  width: 400px;
  min-height: 400px;
  background: #fff;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
`;

export const ModalClose = styled.span`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;
