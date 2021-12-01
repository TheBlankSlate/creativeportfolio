import React, { useState } from 'react';
import Button from '../../../styles/GlobalComponents/Button';

import Link from 'next/link';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillYoutube, AiFillCaretDown } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';
import Dropdown from './Dropdown'

function Header() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  }

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  }

  return (
    <Container>
      <Div1>
        <Link href="/">
          <a style={{ display: 'flex', alignItems: 'center', color: "white", marginBottom: "20px" }}>
            <DiCssdeck size="3rem" /> <Span>Matt's Portfolio</Span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <Link href="/projects">
            <NavLink>Projects<AiFillCaretDown size="2rem" /></NavLink>
          </Link>
          {dropdown && <Dropdown />}
        </li>
        <li>
          <Link href="/about">
            <NavLink>About Me</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/TheBlankSlate" target="_blank" rel="noopener noreferrer">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.youtube.com/channel/UCiAnhriEhqfXlKhGH5FAxsg" target="_blank" rel="noopener noreferrer">
          <AiFillYoutube size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  );
}

export default Header;