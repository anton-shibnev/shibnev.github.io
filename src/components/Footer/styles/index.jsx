import styled from 'styled-components/macro';
import { paddingY } from '../../../style/modal/';
import { Outer } from '../../';
import { FooterList } from './FooterList';
import { FooterSocLink } from './FooterSocLink';

const StyledFooter = styled(Outer)`
  ${paddingY('50px')};
`;

export { FooterList, StyledFooter, FooterSocLink };
