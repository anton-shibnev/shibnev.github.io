import styled from 'styled-components/macro';
import { BtnReset } from '../style/helpers';
import { rem, hoverFocus, transition } from '../style/modal';

const StyledBurger = styled(BtnReset)`
  display: grid;
  grid-gap: 9px;
  width: 30px;
  color: ${(props) => props.theme.DARK};
  ${transition('color')};

  ${hoverFocus`
      color: ${(props) => props.theme.PRIMARY};
  `}
`;

const BurgerLine = styled.span`
  height: ${rem('2px')};
  width: 100%;
  background-color: currentColor;
  display: block;
`;

export const Burger = ({ className, onClick }) => {
  return (
    <StyledBurger className={className} onClick={onClick}>
      {[...Array(3)].map((_, index) => (
        <BurgerLine key={index} />
      ))}
    </StyledBurger>
  );
};
