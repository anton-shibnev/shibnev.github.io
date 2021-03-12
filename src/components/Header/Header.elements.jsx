import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import { Container } from '../Container';
import { hoverFocus } from '../../style/modal/hoverFocus';
import { transition } from '../../style/modal/transition';

export const StyledHeader = styled.header`
  position: sticky;
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
`;

export const HeaderLogo = styled(NavLink)`
  border-radius: 50%;
  background-color: #000;
  width: 3rem;
  height: 3rem;
  margin-right: auto;
  flex-shrink: 0;
  ${transition('background-color')};

  ${hoverFocus`
    background-color: ${(props) => props.theme.PRIMARY};
  `}

  &.active {
    background-color: ${(props) => props.theme.PRIMARY};
  }
`;
