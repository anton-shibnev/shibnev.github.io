import React from 'react';
import styled from 'styled-components';
import { Container, Outer } from '../../components';
import { Title } from '../../style/helpers/typography';
import { WorksList } from './components';
import { WORKS_DATA } from '../../data';
import { paddingY } from '../../style/modal';

const StyledWorks = styled(Outer)`
  ${Container} {
    ${paddingY('50px')};
  }
`;

export const Works = () => {
  return (
    <StyledWorks>
      <Title>{WORKS_DATA.title}</Title>
      <WorksList list={WORKS_DATA.list} />
    </StyledWorks>
  );
};
