import React from 'react';
import { FooterBlock, FooterLogoGithub } from './styled';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import logoDima from '../../assets/svg/logoDima.svg';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import logoJ from '../../assets/svg/logoJ.svg';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import logoDasha from '../../assets/svg/logoDasha.svg';

const LINK_LOGO_GITHUB = [logoDima, logoJ, logoDasha];
const LINK_GITHUB_PAGES = [
  'https://github.com/Dmitriy-hello-world',
  'https://github.com/Evgeniy37529',
  'https://github.com/DariaMalina'
];

const Footer = () => {
  return (
    <FooterBlock>
      {LINK_GITHUB_PAGES.map((el, index) => {
        return (
          <a href={el} key={el}>
            <FooterLogoGithub src={LINK_LOGO_GITHUB[index]} alt="logo" />
          </a>
        );
      })}
    </FooterBlock>
  );
};
export default Footer;
