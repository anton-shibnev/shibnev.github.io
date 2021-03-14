import styled from 'styled-components';
import { font } from '../modal/font';

export const Title = styled.h1`
  ${font({
    'font-size': { mob: '20px', xs: '44px' },
    'line-height': '60px',
    'font-weight': 'bold',
  })};
`;

export const Desc = styled.p`
  ${font({
    'font-size': '16px',
    'line-height': '23px',
    'font-weight': '400',
  })};
`;
