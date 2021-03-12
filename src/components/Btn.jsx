import React from 'react';
import styled from 'styled-components';
import { BtnReset } from '../style/helpers/btnReset';
import { font } from '../style/modal/font';
import { mq } from '../style/modal/mq';
import { rem } from '../style/modal/rem';
import { hoverFocus } from '../style/modal/hoverFocus';
import { transition } from '../style/modal/transition';

const StyledBtn = styled(BtnReset)`
  color: ${(props) => props.theme.WHITE};
  ${font({
    'font-size': { mob: '20px' },
    'line-height': '29px',
    'font-weight': '500',
  })};
  border-radius: ${rem('2px')};
  ${mq('padding', { mob: '10px 5px', xs: '9px 20px' })};

  ${transition('background-color', 'color')};
  background-color: ${(props) => props.theme.PRIMARY};

  ${hoverFocus`
      background-color: ${(props) => props.theme.SECONDARY};
  `};
`;

export const Btn = ({ children, as = 'button' }) => {
  return <StyledBtn as={as}>{children}</StyledBtn>;
};
