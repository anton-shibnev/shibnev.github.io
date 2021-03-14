import React from 'react';
import styled from 'styled-components';
import { circle } from '../style/modal';
import { Picture } from './';

const StyledAvatar = styled(Picture)`
  ${circle('250px')};
`;

export const Avatar = ({ className }) => {
  return <StyledAvatar className={className} />;
};
