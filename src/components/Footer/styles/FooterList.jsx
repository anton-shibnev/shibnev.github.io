import styled from 'styled-components';
import { List } from '../../';
import { circle, gridGap, transition } from '../../../style/modal';

export const FooterList = styled(List)`
  justify-content: center;
  grid-auto-flow: column;
  ${gridGap('30px')};
`;

export const FooterListAnchor = styled.span`
  ${circle('50px')};
  background-color: ${({ theme }) => theme.LIGHT};
  position: absolute;
  transform: translateX(${({ anchorLeft }) => anchorLeft}px);
  ${transition('transform')};
  left: -10px;
`;
