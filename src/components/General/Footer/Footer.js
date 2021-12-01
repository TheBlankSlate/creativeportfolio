import React from 'react';
import { AiFillGithub, AiFillYoutube } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import {FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email Me</LinkTitle>
          <LinkItem href="mailto:matt.hoss30@gmail.com">matt.hoss30@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/TheBlankSlate" target="_blank" rel="noopener noreferrer">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.youtube.com/channel/UCiAnhriEhqfXlKhGH5FAxsg" target="_blank" rel="noopener noreferrer">
            <AiFillYoutube size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
