import React from 'react';
import { FaFacebookSquare, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiCodewars } from 'react-icons/si';
import { HhIcon } from '../icons';
import { StyledFooter, FooterSocLink, FooterList } from './styles';

const FOOTER_DATA = {
  arr: [
    {
      href: 'https://www.facebook.com/anton.shibnev.10',
      icon: FaFacebookSquare,
    },
    { href: 'https://www.codewars.com/users/shibnev', icon: SiCodewars },
    {
      href: 'https://www.linkedin.com/in/антон-шибнев-634130140',
      icon: FaLinkedin,
    },
    {
      href: 'https://spb.hh.ru/resume/063ef629ff034ef45b0039ed1f344433305458',
      icon: HhIcon,
    },
    {
      href: 'https://github.com/shibnev',
      icon: FaGithub,
    },
  ],
};

export const Footer = () => {
  const list = FOOTER_DATA.arr.map((item) => {
    const Item = item.icon;

    return (
      <FooterSocLink href={item.href} target='__blank'>
        <Item />
      </FooterSocLink>
    );
  });

  return (
    <StyledFooter forwardedAs='footer' id='footer'>
      <FooterList gap='30' list={list} />
    </StyledFooter>
  );
};
