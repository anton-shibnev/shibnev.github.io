import styled from 'styled-components/macro';
import { font, hoverFocus } from '../../../style/modal/';

export const FooterSocLink = styled.a`
  color: ${({ theme }) => theme.PRIMARY};
  ${font({ 'font-size': '30px', 'line-height': '1' })};
  position: relative;
  z-index: ${({ theme }) => theme.Z_INDEX.normal};
  display: flex;

  svg {
    pointer-events: none;
  }

  ${hoverFocus``};
`;
