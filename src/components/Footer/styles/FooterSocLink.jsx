import styled from 'styled-components/macro';
import {
  absCenter,
  font,
  hoverFocus,
  wh,
} from '../../../style/modal/';

export const FooterSocLink = styled.a`
  color: ${({ theme }) => theme.PRIMARY};
  ${font({ 'font-size': '30px', 'line-height': '1' })};
  position: relative;
  z-index: ${({ theme }) => theme.Z_INDEX.normal};
  display: flex;

  &::after {
    content: '';
    ${absCenter()};
    ${wh('220%')};
  }

  svg {
    pointer-events: none;
  }

  ${hoverFocus``};
`;
