import styled from 'styled-components';
import { List } from '../../../../components';
import { LinkReset } from '../../../../style/helpers';
import {
  font,
  gridGap,
  hoverFocus,
  padding,
  marginTop,
  rem,
  transition,
} from '../../../../style/modal';

export const WorkCardLink = styled(LinkReset)`
  ${font({ 'font-size': '20px', 'line-height': 1 })};
  ${transition('color')};
  display: flex;

  ${hoverFocus`
      color: ${({ theme }) => theme.PRIMARY};
  `};
`;

export const WorkCardInner = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${({ theme }) => theme.LIGHT};
  border-radius: ${rem('16px')};
  ${padding('24px')};
  height: 100%;
  width: 100%;
  ${transition('transform')};
`;

export const StyledWorkCard = styled.article`
  background-color: ${({ theme }) => theme.SECONDARY};
  border-radius: ${rem('16px')};

  ${hoverFocus`
    ${WorkCardInner} {
      transform: translate(-5px, -5px);
    }
  `};
`;

export const WorkCardTitle = styled.h6`
  ${font({
    'font-size': '24px',
    'line-height': '1.5',
    'letter-spacing': '0.25px',
    'font-weight': '800',
  })};
  text-transform: capitalize;
  color: ${({ theme }) => theme.PRIMARY};
  text-shadow: ${rem('2px 2px 0')} ${({ theme }) => theme.WHITE};
  ${marginTop('20px')};
`;

export const WorkCardDesc = styled.p`
  ${marginTop('10px')};
  ${font({
    'font-size': '16px',
    'line-height': '1.2',
    'font-weight': 'normal',
  })};
`;

export const WorkCardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WorkCardLinks = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: ${rem('14px')};
  margin-left: auto;
`;

export const WorkCardStack = styled(List)`
  ${gridGap('10px')};
  grid-auto-flow: column;
  justify-content: start;
  ${font({ 'font-size': '12px' })};
  text-transform: uppercase;
  margin-top: auto;
`;
