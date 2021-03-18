import styled from 'styled-components';
import { circle, transition } from '../../../style/modal';

export const FooterListAnchor = styled.span`
  ${circle('50px')};
  background-color: ${({ theme }) => theme.LIGHT};
  position: absolute;
  transform: translateX(${({ anchorLeft }) => anchorLeft}px)
    scale(${({ anchorScale }) => anchorScale});
  ${transition('transform')};
  left: -10px;
`;
