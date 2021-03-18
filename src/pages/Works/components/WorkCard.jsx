import React from 'react';
import styled from 'styled-components';
import { LinkReset } from '../../../style/helpers';
import {
  font,
  hoverFocus,
  padding,
  rem,
  transition,
} from '../../../style/modal';
import { HiArrowRight } from 'react-icons/hi';

const WorkCardArrow = styled(HiArrowRight)`
  font-size: ${rem('30px')};
  position: absolute;
  right: ${rem('24px')};
  bottom: ${rem('24px')};
  transform: scale(0);
  ${transition('transform', 'opacity')};
  opacity: 0;
`;

const SWorkCard = styled(LinkReset)`
  display: grid;
  position: relative;
  background-color: ${(theme) => theme.WHITE};
  border-radius: ${rem('16px')};
  ${transition('box-shadow')};
  ${padding('24px')};
  box-shadow: 0 8px 8px rgba(38, 50, 56, 0.06),
    0 16px 24px rgba(38, 50, 56, 0.08);

  ${hoverFocus`
    box-shadow: 0 2px 2px rgba(38, 50, 56, 0.06), 0 8px 12px rgba(38, 50, 56, 0.08);

    ${WorkCardArrow} {
      transform: scale(1);
      opacity: 1;
    }
  `};
`;

const WorkCardTitle = styled.h6`
  ${font({
    'font-size': '18px',
    'line-height': '1.78',
    'letter-spacing': '2.5px',
    'font-weight': '800',
  })};
  text-transform: uppercase;
`;

export const WorkCard = ({ href = '#', title, arrowScale }) => {
  return (
    <SWorkCard href={href} target='__blank'>
      <WorkCardTitle>{title}</WorkCardTitle>
      <WorkCardArrow scale={arrowScale} />
    </SWorkCard>
  );
};
