import styled from 'styled-components';
import { List } from '../../';
import { gridGap } from '../../../style/modal';

export const FooterList = styled(List)`
  justify-content: center;
  grid-auto-flow: column;
  ${gridGap('30px')};
`;
