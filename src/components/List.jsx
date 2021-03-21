import React from 'react';
import styled from 'styled-components/macro';

const StyledList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: ${(props) => props.listStyle || 'none'};
  align-items: center;
  display: grid;
  grid-auto-flow: ${(props) => props.autoFlow || 'row'};
`;

export const List = ({
  as = 'ul',
  list = [],
  autoFlow,
  listStyle,
  className,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <StyledList
      className={className}
      as={as}
      listStyle={listStyle}
      autoFlow={autoFlow}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </StyledList>
  );
};
