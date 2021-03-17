import styled from 'styled-components/macro';
import { BtnReset } from '../style/helpers';
import { rem, hoverFocus, transition, gridGap } from '../style/modal';

const StyledBurger = styled(BtnReset)`
  display: grid;
  ${gridGap('5px')};
  width: ${rem('35px')};
  ${transition('color')};
  color: ${(props) => (props.click ? props.theme.PRIMARY : props.theme.DARK)};
  ${hoverFocus`
     color: ${(props) => props.theme.PRIMARY};
 `};
`;

const BurgerLine = styled.span`
  height: ${rem('5px')};
  border-radius: 999px;
  width: 100%;
  background-color: currentColor;
  display: block;
`;

export const Burger = ({ className, onClick, click }) => {
  return (
    <StyledBurger className={className} onClick={onClick} click={click}>
      {[...Array(3)].map((_, index) => (
        <BurgerLine key={index} />
      ))}
    </StyledBurger>
  );
};
