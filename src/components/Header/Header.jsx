import { Nav } from '../Nav/Nav';
import { StyledHeader, HeaderContainer, HeaderLogo } from './Header.elements';

export const Header = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <HeaderLogo to='/' />
        <Nav />
      </HeaderContainer>
    </StyledHeader>
  );
};
