import styled from 'styled-components/macro';
import { hoverFocus, rem, transition } from '../../../style/modal/';

export const FooterSocLink = styled.a`
  color: ${(props) => props.theme.DARK};
  font-size: ${rem('40px')};
  ${transition('color')};
  ${hoverFocus`
    color: ${(props) => props.theme.PRIMARY};
  `};
`;
