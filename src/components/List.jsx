import React from 'react';
import styled from 'styled-components/macro';

const StyledList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
  margin: -${(props) => props.gap / 2}px;
  list-style: ${(props) => props.listStyle || 'none'};

  > * {
    margin: ${(props) => props.gap / 2}px;
  }
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
