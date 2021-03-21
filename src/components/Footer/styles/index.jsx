import styled from 'styled-components';
import { font, marginTop, paddingY } from '../../../style/modal/';
import { Outer } from '../../';
import { Container } from '../../Container';

export const StyledFooter = styled(Outer)`
  ${paddingY({ mob: '20px', xs: '50px' })};
  position: relative;
  z-index: ${({ theme }) => theme.Z_INDEX.normal};

  ${Container} {
    position: relative;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const FooterWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterMadeBy = styled.p`
  ${font({ 'font-size': '12px' })};
  ${marginTop('20px')};
`;

export { FooterList } from './FooterList';
export { FooterSocLink } from './FooterSocLink';
export { FooterListAnchor } from './FooterListAnchor';
