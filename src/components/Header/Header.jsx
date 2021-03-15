import React, { useState } from 'react';
import {
  HeaderNav,
  HeaderMobNav,
  StyledHeader,
  HeaderBurger,
} from './Header.elements';

export const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <StyledHeader forwardedAs='header' id='header'>
      <HeaderNav />
      <HeaderBurger onClick={handleClick} click={click}/>
      <HeaderMobNav direction='column' onClick={handleClick} click={click} />
    </StyledHeader>
  );
};
