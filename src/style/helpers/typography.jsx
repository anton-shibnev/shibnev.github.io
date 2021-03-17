import styled from 'styled-components';
import { font } from '../modal/font';

export const Title = styled.h1`
  ${font({
    'font-size': { mob: '40px', xs: '70px' },
    'line-height': '1',
    'font-weight': '800',
    'letter-spacing': '-3px',
  })};
`;

export const Desc = styled.p`
  ${font({
    'font-size': '18px',
    'line-height': '32px',
    'font-weight': 'normal',
  })};
`;
