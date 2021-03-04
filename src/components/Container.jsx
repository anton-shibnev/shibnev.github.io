import styled from 'styled-components/macro';
import marginX from '../style/modal/margin';
import { paddingX } from '../style/modal/padding';
import {
  CONTAINER_PADDINGS,
  CONTAINER_MAX_WIDTH,
} from '../style/config/container';

export const Container = styled.div`
  ${marginX()};
  ${paddingX(CONTAINER_PADDINGS)};
  width: 100%;
  max-width: ${parseInt(CONTAINER_MAX_WIDTH) +
  parseInt(CONTAINER_PADDINGS.mob) * 2}px;
`;
