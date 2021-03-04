import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { DARK } from '../../style/config/colors';

export const StyledNav = styled.nav`
  display: grid;
  grid-gap: 20px;
  grid-auto-flow: column;
  align-items: center;
`;

export const NavItem = styled(Link)`
  color: ${DARK};
  text-decoration: none;
`;
