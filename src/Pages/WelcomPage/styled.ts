import styled from 'styled-components';

export const Page = styled.div`
   {
    padding: 20px 20px 0 20px;
    box-shadow: inset 10px 10px 100px 432px rgba(227, 227, 220, 0.66);
    background: url(${require('../../assets/img/bg.jpg')}) center/cover;
  }
`;

export const AuthButtons = styled.div`
   {
    display: flex;
    justify-content: end;
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
