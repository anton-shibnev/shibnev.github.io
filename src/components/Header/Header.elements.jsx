import styled from 'styled-components/macro';
import { display, padding, paddingY, transition } from '../../style/modal/';
import { Burger, Nav, Outer, Container } from '../';
import { SIZE } from '../../style/config/theme';
import { List } from '../List';

export const StyledHeader = styled(Outer)`
  position: sticky;
  ${paddingY(SIZE.xs)};
  z-index: ${({ theme }) => theme.Z_INDEX.sticky};

  ${Container} {
    display: flex;
    align-items: center;
  }
`;

export const HeaderNav = styled(Nav)`
  ${display({ mob: 'none', xs: 'block' })}
  margin-left: auto;
  color: white;

  ${List} {
    grid-auto-flow: column;
  }
`;

export const HeaderMobNav = styled(Nav)`
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  z-index: ${(props) => props.theme.Z_INDEX.fixed};
  background-color: ${(props) => props.theme.LIGHT};
  ${transition('transform')};
  transform: translate(${(props) => (props.click ? '0' : '110%')});
  ${padding('20px')};
  box-shadow: 0 4px 10px rgba(187, 225, 250, 0.25);

  ${display({ mob: 'flex', xs: 'none' })};
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const HeaderBurger = styled(Burger)`
  ${display({ mob: 'grid', xs: 'none' })};
  margin-left: auto;
  z-index: ${(props) => props.theme.Z_INDEX.backdrop};
`;
