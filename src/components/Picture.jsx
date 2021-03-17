import React from 'react';
import styled from 'styled-components';
import { DARK } from '../style/config/theme';
import { rgba } from '../style/modal';

const StyledPicture = styled.picture`
  display: block;
  position: relative;

  img {
    background-color: ${rgba(DARK, 0.1)};
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    z-index: 5;
  }
`;

export const Picture = ({
  path = '',
  fileName,
  source = [],
  fileType = 'jpg',
  alt = '',
  className,
}) => {
  const sourceList = source.map((bp, index) => (
    <source
      key={index}
      media={`min-width: ${bp}px`}
      srcSet={`${path}/${fileName}--${bp}.${fileType}`}
      type={`image/${fileType}`}
    />
  ));

  const picPath = require(`../static/images/${path}${fileName}.${fileType}`)
    .default;

  return (
    <StyledPicture className={className}>
      {sourceList}
      <img src={picPath} alt={alt} />
    </StyledPicture>
  );
};
