import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import { hoverFocus } from '../../style/modal/hoverFocus';
import { transition } from '../../style/modal/transition';

export const StyledNav = styled.nav``;

export const NavItem = styled(NavLink)`
  color: ${(props) => props.theme.DARK};
  text-decoration: none;
  ${transition('color')};

  ${hoverFocus`
    color: ${(props) => props.theme.PRIMARY};
  `}

  &.active {
    color: ${(props) => props.theme.PRIMARY};
  }
`;
