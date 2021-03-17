import styled from 'styled-components';
import { List } from '../';
import { gridGap } from '../../style/modal';

export const SNavList = styled(List)`
  position: relative;
  grid-auto-flow: ${(props) => props.autoFlow || 'column'};
  ${gridGap('30px')};
`;

export const NavList = ({ list, autoFlow }) => {
  return <SNavList list={list} autoFlow={autoFlow} />;
};
