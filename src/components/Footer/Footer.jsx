import React from 'react';
import { StyledFooter, SocLink } from './Footer.elements';
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import { SiCodewars } from 'react-icons/si';
import { List } from '../List';
import { HhIcon } from '../icons/HhIcon';

export const Footer = () => {
  const arr = [
    { href: '#', icon: FaFacebookSquare },
    { href: '#', icon: SiCodewars },
    { href: '#', icon: FaLinkedin },
    { href: '#', icon: HhIcon },
  ];

  const list = arr.map((item) => {
    const Item = item.icon;

    return (
      <SocLink href={item.href}>
        <Item />
      </SocLink>
    );
  });

  return (
    <StyledFooter forwardedAs='footer' id='footer'>
      <List gap='30' list={list}></List>
    </StyledFooter>
  );
};
