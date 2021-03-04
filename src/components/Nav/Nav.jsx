import { StyledNav, NavItem } from './Nav.elements';

export const Nav = () => {
  return (
    <>
      <StyledNav>
        <NavItem to='/works'>works</NavItem>
        <NavItem to='/blog'>blog</NavItem>
        <NavItem to='/contacts'>contacts</NavItem>
      </StyledNav>
    </>
  );
};
