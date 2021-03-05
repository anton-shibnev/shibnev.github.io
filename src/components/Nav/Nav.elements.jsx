import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { DARK } from '../../style/config/colors';

export const StyledNav = styled.nav``;

export const NavItem = styled(Link)`
  color: ${DARK};
  text-decoration: none;
`;
