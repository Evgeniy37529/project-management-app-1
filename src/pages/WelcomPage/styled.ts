import styled, { css, keyframes } from 'styled-components';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const backgroundImage = require('../../assets/img/bg.jpg');

export const Page = styled.div`
   {
    padding: 35x 20px 0 20px;
    box-shadow: inset 10px 10px 100px 432px rgba(227, 227, 220, 0.66);
    background: url(${backgroundImage}) center/cover;
  }
`;

export const AuthButtons = styled.div`
   {
    display: flex;
    justify-content: end;
    align-items: center;
    top: 10px;
    transition: 'all 0.5s ease';
  }
`;

export const ButtonsContainer = styled.div`
   {
    display: flex;
    justify-content: end;
    align-items: center;
    top: 10px;
    transition: 'all 0.5s ease';
  }
`;

const smoothScroll = keyframes`
0% {
  transform: translateY(20px);
}

100% {
  transform: translateY(0px);
  background-color: #ffffff92;
  padding-bottom: 15px;
}
`;
export const StickyHeader = styled.div<{ sticky: boolean }>`
   {
    padding: 25px;
    position: ${(props) => props.sticky && 'sticky'};
    top: ${(props) => props.sticky && '-15px'};
    width: ${(props) => props.sticky && '100%'};
    background-color: ${(props) => (props.sticky ? '#ffffff' : 'transparent')};
    animation: ${(props) =>
      props.sticky &&
      css`
        ${smoothScroll} 0.7s forwards
      `};
    z-index: 99;
  }
`;

export const AboutProject = styled.div`
   {
    margin-top: 40px;
  }
`;

export const CardWrapper = styled.div`
   {
    margin-bottom: 40px;
  }
`;
export const Footer = styled.footer`
   {
    padding-top: 10px !important;
    padding-bottom: 10px !important;
    background: rgba(238, 231, 231, 0.473) !important;
    box-shadow: 0 0 5px 0px rgb(1, 1, 1), inset 0 0 15px 0px rgb(1, 1, 1);
  }
`;
