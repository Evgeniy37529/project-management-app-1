import React from 'react';
import { FooterBlock, FooterLogoGithub } from './styled';

const LINK_LOGO_GITHUB = 'https://www.svgrepo.com/show/359980/github.svg';
const LINK_GITHUB_PAGES = [
  'https://github.com/Dmitriy-hello-world',
  'https://github.com/Evgeniy37529',
  'https://github.com/DariaMalina',
];

const Footer = () => {
  return (
    <FooterBlock>
      {LINK_GITHUB_PAGES.map((el) => {
        return (
          <a href={el} key={el}>
            <FooterLogoGithub src={LINK_LOGO_GITHUB} alt="logo" />
          </a>
        );
      })}
    </FooterBlock>
  );
};
export default Footer;
