import React from 'react';
import styled from 'styled-components';
import { BtnReset } from '../style/helpers';
import { font } from '../style/modal/font';
import { rem } from '../style/modal/rem';
import { hoverFocus } from '../style/modal/hoverFocus';
import { transition } from '../style/modal/transition';
import { padding } from '../style/modal/padding';

const StyledBtn = styled(BtnReset)`
  position: relative;
  color: ${(props) => props.theme.WHITE};
  ${font({
    'font-size': { mob: '21px', xs: '24px' },
    'line-height': '36px',
    'font-weight': 'bold',
    'letter-spacing': '0.25px',
  })};
  display: inline-flex;
  text-decoration: none;
  background-color: ${(props) => props.theme.SECONDARY};
  border-radius: ${rem('16px')};
`;

const BtnBody = styled.span`
  border-radius: ${rem('16px')};
  ${padding({ mob: '10px 30px', xs: '12px 40px' })};
  ${transition('transform')};
  background-color: ${(props) => props.theme.PRIMARY};
  transform: translate(-4px, -4px);

  ${hoverFocus`
      transform: translate(0, 0);
  `};
`;

export const Btn = ({ target, children, as = 'button', className, href }) => {
  return (
    <StyledBtn target={target} as={as} className={className} href={href}>
      <BtnBody>{children}</BtnBody>
    </StyledBtn>
  );
};
