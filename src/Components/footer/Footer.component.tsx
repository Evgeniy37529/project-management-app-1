import React from 'react';
import { FooterBlock, FooterLogoGithub } from './styled';

const Footer = () => {
  const linkLogoGithub = 'https://www.svgrepo.com/show/359980/github.svg';
  const linkGithubPages = [
    'https://github.com/Dmitriy-hello-world',
    'https://github.com/Evgeniy37529',
    'https://github.com/DariaMalina'
  ];
  return (
    <FooterBlock>
      {linkGithubPages.map((el) => {
        return (
          <a href={el} key={el}>
            <FooterLogoGithub src={linkLogoGithub} alt="logo" />
          </a>
        );
      })}
    </FooterBlock>
  );
};
export default Footer;
