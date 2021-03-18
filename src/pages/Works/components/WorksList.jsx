import React from 'react';
import styled from 'styled-components';
import { gridGap, marginTop, rem } from '../../../style/modal';
import { WorkCard } from './';

const StyledWorksList = styled.div`
  display: grid;
  grid-template-rows: ${rem('300px')};
  grid-template-columns: repeat(auto-fill, minmax(${rem('300px')}, 1fr));
  ${gridGap('20px')};
  ${marginTop('40px')};
`;

export const WorksList = ({ list = [] }) => {
  const mapList = list.map((el, index) => (
    <WorkCard key={index} title={el.title} href={el.href} />
  ));

  return <StyledWorksList>{mapList}</StyledWorksList>;
};
