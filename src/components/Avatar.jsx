import React from 'react';
import styled from 'styled-components';
import { circle } from '../style/modal';
import { Picture } from './';

const StyledAvatar = styled(Picture)`
  img {
    ${circle('250px')};
  }
`;

export const Avatar = ({
  path,
  fileName,
  source = [],
  fileType = 'jpg',
  alt = '',
  className,
}) => {
  return (
    <StyledAvatar
      path={path}
      fileName={fileName}
      source={source}
      fileType={fileType}
      alt={alt}
      className={className}
    />
  );
};
