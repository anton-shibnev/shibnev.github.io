// import { Burger } from '../Burger';
import { Nav } from '../Nav/Nav';
import { StyledHeader, HeaderContainer, HeaderLogo } from './Header.elements';

export const Header = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <HeaderLogo to='/' exact={true} />
        <Nav />
        {/* <Burger /> */}
      </HeaderContainer>
    </StyledHeader>
  );
};
