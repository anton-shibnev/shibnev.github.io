import styled from 'styled-components/macro';
import { DARK } from '../../style/config/colors';
import { Container } from '../Container';

export const FooterContainer = styled(Container)``;

// display: grid;
// grid-auto-flow: column;
// align-items: center;
// justify-content: center;
export const StyledFooter = styled.footer``;

const StyledSocLink = styled.a`
  color: ${DARK};
  font-size: 2rem;
`;

export const SocLink = ({ href = '#', children }) => {
  return (
    <>
      <StyledSocLink target='__blank' href={href}>
        {children}
      </StyledSocLink>
    </>
  );
};
