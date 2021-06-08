import React, { useState } from 'react';
import { MAIN_DATA } from '../../data';
import {
  HeaderNav,
  HeaderMobNav,
  StyledHeader,
  HeaderBurger,
} from './Header.elements';

const DATA = MAIN_DATA.header;

export const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <StyledHeader forwardedAs='header' id='header'>
      <HeaderNav list={DATA.list} autoFlow='column' />
      <HeaderBurger onClick={handleClick} click={click} />
      <HeaderMobNav
        list={DATA.list}
        onClick={handleClick}
        click={click}
        autoFlow='row'
      />
    </StyledHeader>
  );
};
