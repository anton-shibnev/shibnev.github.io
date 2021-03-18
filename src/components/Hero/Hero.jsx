import React from 'react';
import { HOME_DATA } from '../../data';
import {
  HeroBtn,
  HeroDesc,
  HeroTitle,
  StyledHero,
  HeroAvatar,
} from './Hero.elements';

const DATA = HOME_DATA.hero;

export const Hero = () => {
  return (
    <StyledHero id='hero'>
      <HeroTitle>{DATA.title}</HeroTitle>
      <HeroDesc>{DATA.desc}</HeroDesc>
      <HeroBtn href={DATA.btn.href} forwardedAs='a'>
        {DATA.btn.label}
      </HeroBtn>
      <HeroAvatar
        path={DATA.avatar.path}
        fileName={DATA.avatar.fileName}
        source={DATA.avatar.source}
        fileType={DATA.avatar.fileType}
        alt={DATA.avatar.alt}
      />
    </StyledHero>
  );
};
