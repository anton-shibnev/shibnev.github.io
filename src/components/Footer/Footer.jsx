import React, { useState } from 'react';
import { MAIN_DATA } from '../../data';
import { StyledFooter, FooterSocLink, FooterList, FooterInner } from './styles';
import { FooterListAnchor } from './styles/FooterList';

const DATA = MAIN_DATA.footer;

export const Footer = () => {
  const [anchorLeft, setAnchorLeft] = useState(0);

  const moveAnchor = (e) => setAnchorLeft(e.target.offsetLeft);

  const list = DATA.arr.map((item) => {
    const Item = item.icon;

    return (
      <FooterSocLink
        onMouseEnter={moveAnchor}
        href={item.href}
        target='__blank'
      >
        <Item />
      </FooterSocLink>
    );
  });

  return (
    <StyledFooter forwardedAs='footer' id='footer'>
      <FooterInner>
        <FooterList gap='30' list={list} />
        <FooterListAnchor anchorLeft={anchorLeft} />
      </FooterInner>
    </StyledFooter>
  );
};
