import styled from 'styled-components/macro';
import { hoverFocus } from '../../style/modal/hoverFocus';
import { transition } from '../../style/modal/transition';
import { Outer } from '../Outer';

export const StyledFooter = styled(Outer)``;

const StyledSocLink = styled.a`
  color: ${(props) => props.theme.DARK};
  font-size: 2rem;
  ${transition('color')};
  ${hoverFocus`
    color: ${(props) => props.theme.PRIMARY};
  `};
`;

export const SocLink = ({ href = '#', children }) => {
  return (
    <StyledSocLink target='__blank' href={href}>
      {children}
    </StyledSocLink>
  );
};
