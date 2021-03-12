import React from 'react';
import styled from 'styled-components';

const StyledPicture = styled.picture`
  display: block;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Picture = ({
  path,
  fileName,
  source,
  fileType = 'jpg',
  alt = '',
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
    <StyledPicture>
      {sourceList}
      <img src={`${path}/${fileName}.${fileType}`} alt={alt} />
    </StyledPicture>
  );
};
