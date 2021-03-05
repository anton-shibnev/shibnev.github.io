import { List } from '../List';
import { NavItem } from './Nav.elements';

export const Nav = () => {
  const arr = [
    { to: '/works', label: 'works' },
    { to: '/blog', label: 'blog' },
    { to: '/contacts', label: 'contacts' },
  ];

  const list = arr.map((item) => <NavItem to={item.to}>{item.label}</NavItem>);

  return (
    <nav>
      <List gap='20px' list={list} />
    </nav>
  );
};
