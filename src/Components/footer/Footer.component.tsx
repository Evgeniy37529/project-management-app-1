import React from 'react';
import { FooterBlock, FooterLogoGithub } from './styled';

const LINK_LOGO_GITHUB = [
  'http://svgur.com/i/h50.svg',
  'http://svgur.com/i/h4K.svg',
  'http://svgur.com/i/h5q.svg'
];
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
