import React, { useState } from 'react';
import { MAIN_DATA } from '../../data';
import {
  FooterListAnchor,
  StyledFooter,
  FooterSocLink,
  FooterList,
  FooterMadeBy,
  FooterWrap,
} from './styles';

const DATA = MAIN_DATA.footer;

export const Footer = () => {
  const [anchorLeft, setAnchorLeft] = useState(0);
  const [anchorScale, setAnchorScale] = useState(0);

  const moveAnchor = (e) => setAnchorLeft(e.target.offsetLeft);

  const list = DATA.arr.map((item) => {
    const Item = item.icon;

    return (
      <FooterSocLink
        onMouseEnter={moveAnchor}
        href={item.href}
        title={item.title}
        target='__blank'
      >
        <Item />
      </FooterSocLink>
    );
  });

  return (
    <StyledFooter forwardedAs='footer' id='footer'>
      <FooterWrap>
        <FooterList
          gap='30'
          list={list}
          onMouseEnter={() => setAnchorScale(1)}
          onMouseLeave={() => setAnchorScale(0)}
        />
        <FooterListAnchor anchorScale={anchorScale} anchorLeft={anchorLeft} />
      </FooterWrap>
      <FooterMadeBy>{DATA.madeBy}</FooterMadeBy>
    </StyledFooter>
  );
};
