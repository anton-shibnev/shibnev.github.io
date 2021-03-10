import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

export const StyledNav = styled.nav``;

export const NavItem = styled(NavLink)`
  color: ${(props) => props.theme.DARK};
  text-decoration: none;
  transition: ${(props) => props.theme.TRANSITION};

  &.active {
    color: ${(props) => props.theme.PRIMARY};
  }
`;
