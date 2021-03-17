import styled from 'styled-components';
import { NavItem } from './NavItem';
import { NavList } from './NavList';

const SNav = styled.nav`
  position: relative;
`;

export const Nav = ({ className, onClick, autoFlow, list }) => {
  const mapList = list.map((item) => (
    <NavItem exact to={item.to} onClick={onClick}>
      {item.label}
    </NavItem>
  ));

  return (
    <SNav className={className}>
      <NavList list={mapList} autoFlow={autoFlow} />
      {/* <NavAnchor anchorWidth={anchorWidth} positionX={anchorPositionX} /> */}
    </SNav>
  );
};
