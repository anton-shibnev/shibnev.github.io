import React from 'react';
import styled from 'styled-components/macro';

const StyledList = styled.ul`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-auto-flow: ${(props) => props.autoFlow || 'column'};
  grid-gap: ${(props) => props.gap || '0'};
  padding: 0;
  margin: 0;
  list-style: ${(props) => props.listStyle || 'none'};
`;

export const List = ({ priority = 'ul', list, gap, autoFlow, listStyle }) => {
  const listItems = list.map((item, index) => <li key={index}>{item}</li>);

  return (
    <StyledList
      gap={gap}
      as={priority}
      listStyle={listStyle}
      autoFlow={autoFlow}
    >
      {listItems}
    </StyledList>
  );
};
