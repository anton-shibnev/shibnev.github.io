import styled from 'styled-components/macro';
import { paddingY } from '../../../style/modal/';
import { Outer } from '../../';
import { FooterList } from './FooterList';
import { FooterSocLink } from './FooterSocLink';
import { Container } from '../../Container';

const StyledFooter = styled(Outer)`
  ${paddingY({ mob: '20px', xs: '50px' })};
  position: relative;
  z-index: ${({ theme }) => theme.Z_INDEX.normal};

  ${Container} {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const FooterInner = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { FooterInner, FooterList, StyledFooter, FooterSocLink };
