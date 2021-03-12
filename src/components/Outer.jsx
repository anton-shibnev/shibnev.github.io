import React from 'react';
import styled from 'styled-components';
import { Container } from './Container';

const StyledSection = styled.section``;

export const Outer = ({ children, id, as = 'section' }) => {
  return (
    <StyledSection id={id} as={as}>
      <Container>{children}</Container>
    </StyledSection>
  );
};
