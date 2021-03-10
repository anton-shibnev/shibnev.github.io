import { List } from '../List';
import { NavItem, StyledNav } from './Nav.elements';

export const Nav = () => {
  const arr = [
    { to: '/works', label: 'works' },
    { to: '/blog', label: 'blog' },
    { to: '/contacts', label: 'contacts' },
  ];

  const list = arr.map((item) => <NavItem to={item.to}>{item.label}</NavItem>);

  return (
    <StyledNav>
      <List gap='20' list={list} />
    </StyledNav>
  );
};
