import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { transition, font, hoverFocus } from '../../style/modal';
import { List } from '../';
import { gridGap } from '../../style/modal';

export const SNav = styled.nav`
  position: relative;
`;

export const NavItem = styled(NavLink)`
  color: ${({ theme }) => theme.DARK};
  text-decoration: none;
  text-shadow: 0.06em 0.06em 0 ${({ theme }) => theme.WHITE};
  ${transition('color')};
  ${font({
    'font-size': '30px',
    'line-height': '1',
    'font-weight': '900',
  })};

  ${hoverFocus`
    color: ${({ theme }) => theme.DANGER};
  `}

  &.active {
    color: ${({ theme }) => theme.DANGER};
    position: relative;

    &::after {
      content: '';

      display: block;
      position: absolute;
      top: 60%;
      background-color: ${({ theme }) => theme.SECONDARY};
      height: 0.5em;
      border-radius: 999px;
      z-index: -1;
      width: calc(100% + 20px);
      left: 50%;
      ${transition('width', 'left')};
      transform: translateX(-50%);
    }
  }
`;

export const NavAnchor = styled.span`
  display: block;
  position: absolute;
  top: ${({ positionY }) => positionY || '60%'};
  background-color: ${({ theme }) => theme.SECONDARY};
  height: 0.7em;
  border-radius: 999px;
  z-index: -1;
  width: ${({ anchorWidth }) => anchorWidth};
  left: ${({ positionX }) => positionX};
  transform: scaleX(1.1);
  ${transition('width', 'left')};
`;

export const SNavList = styled(List)`
  position: relative;
  grid-auto-flow: ${(props) => props.autoFlow || 'column'};
  ${gridGap('30px')};
`;

export const NavList = ({ list, autoFlow }) => {
  return <SNavList list={list} autoFlow={autoFlow} />;
};
