import styled from 'styled-components';
import {
  rem,
  paddingY,
  maxWidth,
  gridTemplateAreas,
  wh,
  justifyContent,
} from '../../style/modal/';
import { Outer, Btn, Container, Avatar } from '../';
import { Desc, Title } from '../../style/helpers/typography';

export const StyledHero = styled(Outer)`
  ${paddingY({ mob: '70px' })};
  display: grid;
  align-items: center;
  height: 100%;
  position: relative;

  ${Container} {
    align-items: center;
    display: grid;
    ${justifyContent({ mob: 'center', xs: 'space-between;' })};
    ${gridTemplateAreas({
      mob: `'title' 'desc' 'avatar' 'btn'`,
      xs: `'title avatar' 'desc avatar' 'btn avatar'`,
    })};
    grid-gap: ${rem('20px 50px')};
  }
`;

export const HeroTitle = styled(Title)`
  ${maxWidth('800px')}

  position: relative;
  z-index: ${({ theme }) => theme.Z_INDEX.normal};
  grid-area: title;
`;

export const HeroDesc = styled(Desc)`
  grid-area: desc;
  position: relative;
  z-index: ${({ theme }) => theme.Z_INDEX.normal};
`;

export const HeroBtn = styled(Btn)`
  grid-area: btn;
  justify-self: start;
  position: relative;
  z-index: ${({ theme }) => theme.Z_INDEX.normal};
`;

export const HeroAvatar = styled(Avatar)`
  grid-area: avatar;
  position: relative;

  &:after {
    content: '';
    ${wh('100vh')};
    position: absolute;
    top: ${rem('-60vh')};
    right: ${rem('-500px')};
    background-color: ${({ theme }) => theme.LIGHT};
    transform: rotate(45deg);
    border-radius: ${rem('99px')};
    opacity: 0.4;
  }
`;
