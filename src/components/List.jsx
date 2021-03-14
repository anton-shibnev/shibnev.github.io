import React from 'react';
import styled from 'styled-components/macro';

// TODO flex-grid func
const StyledList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: -${(props) => props.gap / 2}px 0 0 -${(props) => props.gap / 2}px;
  flex-direction: ${(props) => props.direction};
  padding: 0;
  list-style: ${(props) => props.listStyle || 'none'};
  overflow: hidden;

  > * {
    margin: ${(props) => props.gap / 2}px 0 0 ${(props) => props.gap / 2}px;
  }
`;

export const List = ({
  as = 'ul',
  list = [],
  gap,
  autoFlow,
  listStyle,
  className,
  direction = 'row',
}) => {
  const listItems = list.map((item, index) => <li key={index}>{item}</li>);

  return (
    <StyledList
      className={className}
      gap={gap}
      as={as}
      listStyle={listStyle}
      autoFlow={autoFlow}
      direction={direction}
    >
      {listItems}
    </StyledList>
  );
};
