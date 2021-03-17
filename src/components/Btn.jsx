import React from 'react';
import styled from 'styled-components';
import { BtnReset } from '../style/helpers';
import { font } from '../style/modal/font';
import { mq } from '../style/modal/mq';
import { rem } from '../style/modal/rem';
import { hoverFocus } from '../style/modal/hoverFocus';
import { transition } from '../style/modal/transition';

const StyledBtn = styled(BtnReset)`
  color: ${(props) => props.theme.WHITE};
  ${font({
    'font-size': { mob: '24px' },
    'line-height': '36px',
    'font-weight': 'bold',
    'letter-spacing': '0.25px',
  })};
  border-radius: ${rem('16px')};
  ${mq('padding', { mob: '10px 5px', xs: '12px 40px' })};
  text-shadow: 0 2px 4px rgba(38, 50, 56, 0.16),
    0 4px 8px rgba(38, 50, 56, 0.08);
  box-shadow: 0px 8px 24px rgba(38, 50, 56, 0.1),
    0px 16px 32px rgba(38, 50, 56, 0.08);
  ${transition('background-color', 'color', 'box-shadow')};
  background-color: ${(props) => props.theme.PRIMARY};
  display: inline-flex;
  text-decoration: none;

  ${hoverFocus`
    background-color: ${(props) => props.theme.DARK};
  `};
`;

export const Btn = ({ children, as = 'button', className, href }) => {
  return (
    <StyledBtn as={as} className={className} href={href}>
      {children}
    </StyledBtn>
  );
};
