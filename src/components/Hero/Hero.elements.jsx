import styled from 'styled-components';
import {
  rem,
  paddingY,
  maxWidth,
  gridTemplateAreas,
  justifyContent,
} from '../../style/modal/';
import { Outer, Btn, Container, Avatar } from '../';
import { Desc, Title } from '../../style/helpers/typography';

export const StyledHero = styled(Outer)`
  ${paddingY({ mob: '70px' })};
  display: grid;
  align-items: end;
  height: 100%;

  ${Container} {
    display: grid;
    ${gridTemplateAreas({
      mob: `'title' 'desc' 'avatar' 'btn'`,
      xs: `'title avatar' 'desc avatar' 'btn avatar'`,
    })};
    grid-gap: ${rem('20px 100px')};
    /* ${justifyContent({ mob: 'center' })}; */
  }
`;

export const HeroTitle = styled(Title)`
  ${maxWidth('480px')}
  grid-area: title;
`;

export const HeroDesc = styled(Desc)`
  grid-area: desc;
`;

export const HeroBtn = styled(Btn)`
  grid-area: btn;
  justify-self: start;
`;

export const HeroAvatar = styled(Avatar)`
  grid-area: avatar;
`;
