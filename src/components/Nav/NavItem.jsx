import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import { transition, font, hoverFocus } from '../../style/modal';

export const NavItem = styled(NavLink)`
  color: ${(props) => props.theme.DARK};
  text-decoration: none;
  ${transition('color')};
  ${font({
    'font-size': '20px',
    'line-height': '29px',
    'font-weight': '500',
  })};

  ${hoverFocus`
    color: ${(props) => props.theme.PRIMARY};
  `}

  &.active {
    color: ${(props) => props.theme.PRIMARY};
  }
`;
