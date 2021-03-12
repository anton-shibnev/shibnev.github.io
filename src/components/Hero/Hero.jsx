import React from 'react';
import styled from 'styled-components';
import { Desc, Title } from '../../style/helpers/typography';
import { Btn } from '../Btn';
import { Outer } from '../Outer';

const StyledHero = styled(Outer)`
  min-height: 100vh;
`;

export const Hero = () => {
  return (
    <StyledHero id={'hero'}>
      <Title>Hi, I am Anton</Title>
      <Desc>Hi, I am Anton</Desc>
      <Btn>Download Resume</Btn>
    </StyledHero>
  );
};
