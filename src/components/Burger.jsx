import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { BtnReset } from '../style/helpers/btnReset';
import { mq } from '../style/modal/mq';
import { rem } from '../style/modal/rem';

const StyledBurger = styled(BtnReset)`
  ${mq('display', { mob: 'grid', xs: 'none' })};
  grid-gap: 9px;
  width: 30px;
`;

const BurgerLine = styled.span`
  height: ${rem('2px')};
  width: 100%;
  background-color: ${(props) => props.theme.DARK};
  display: block;
`;

export const Burger = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <StyledBurger onClick={handleClick} className={click ? 'active' : ''}>
      {[...Array(3)].map((_, index) => (
        <BurgerLine key={index} />
      ))}
    </StyledBurger>
  );
};
