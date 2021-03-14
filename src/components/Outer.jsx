import React from 'react';
import styled from 'styled-components';
import { Container } from './';

const StyledOuter = styled.section``;

export const Outer = ({ children, id, as = 'section', className }) => {
  return (
    <StyledOuter id={id} as={as} className={className}>
      <Container>{children}</Container>
    </StyledOuter>
  );
};
