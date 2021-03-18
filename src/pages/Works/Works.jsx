import React from 'react';
import styled from 'styled-components';
import { Outer } from '../../components';
import { Title } from '../../style/helpers/typography';
import { WorksList } from './components';
import { WORKS_DATA } from '../../data';

const StyledWorks = styled(Outer)``;

export const Works = ({ list }) => {
  return (
    <StyledWorks>
      <Title>{WORKS_DATA.title}</Title>
      <WorksList list={WORKS_DATA.list} />
    </StyledWorks>
  );
};
