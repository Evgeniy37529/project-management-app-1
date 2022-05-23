import React from 'react';
import { FooterBlock, FooterLogoGithub } from './styled';
import { LINK_GITHUB_PAGES } from '../../constants/footerConst';
import { LINK_LOGO_GITHUB } from '../../constants/footerConst';

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
