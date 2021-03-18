import styled from 'styled-components';
import {
  rem,
  paddingY,
  textAlign,
  maxWidth,
  gridTemplateAreas,
  wh,
  justifySelf,
  justifyContent,
  justifyItems,
  gridGap,
} from '../../style/modal/';
import { Outer, Btn, Container, Avatar } from '../';
import { Desc, Title } from '../../style/helpers/typography';

export const StyledHero = styled(Outer)`
  ${paddingY({ xs: '70px' })};
  display: grid;
  align-items: center;
  height: 100%;
  position: relative;

  ${Container} {
    align-items: center;
    display: grid;
    ${justifyContent({ mob: 'center', xs: 'space-between;' })};
    ${justifyItems({ mob: 'center', xs: 'normal' })};
    ${gridTemplateAreas({
      mob: `'title' 'desc' 'avatar' 'btn'`,
      xs: `'title avatar' 'desc avatar' 'btn avatar'`,
    })};
    ${gridGap('20px 50px')};
    ${textAlign({ mob: 'center', xs: 'left' })};
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
  ${justifySelf({ mob: 'center', xs: 'start' })};
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
