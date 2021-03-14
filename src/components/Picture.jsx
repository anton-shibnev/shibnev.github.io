import React from 'react';
import styled from 'styled-components';
import { DARK } from '../style/config/theme';
import { rgba } from '../style/modal';

const StyledPicture = styled.picture`
  display: block;
  background-color: ${rgba(DARK, 0.1)};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Picture = ({
  path,
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

  return (
    <StyledPicture className={className}>
      {sourceList}
      <img src={`${path}/${fileName}.${fileType}`} alt={alt} />
    </StyledPicture>
  );
};
