import { List } from '../';
import { NavItem } from './NavItem';

export const Nav = ({ className, onClick, direction }) => {
  const arr = [
    { to: '/', label: 'home' },
    { to: '/works', label: 'works' },
    { to: '/contacts', label: 'contacts' },
  ];

  const list = arr.map((item) => (
    <NavItem exact to={item.to} onClick={onClick}>
      {item.label}
    </NavItem>
  ));

  return (
    <nav className={className}>
      <List gap='20' list={list} direction={direction} />
    </nav>
  );
};
