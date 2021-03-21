import React from 'react';
import styled from 'styled-components';
import { circle, rem } from '../style/modal';
import { Picture } from './';

const StyledAvatar = styled(Picture)`
  img {
    ${(props) => (props.isCircle ? circle('250px') : '')};
    box-shadow: ${rem('-3px 3px 0 3px')} ${({ theme }) => theme.LIGHT};
  }
`;

export const Avatar = ({
  path,
  fileName,
  source = [],
  fileType = 'jpg',
  alt = '',
  className,
  isCircle = true,
}) => {
  return (
    <StyledAvatar
      path={path}
      fileName={fileName}
      source={source}
      fileType={fileType}
      alt={alt}
      className={className}
      isCircle={isCircle}
    />
  );
};
