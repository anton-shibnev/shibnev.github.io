import styled from 'styled-components/macro';
import { marginX } from '../style/modal/margin';
import { paddingX } from '../style/modal';
import { CONTAINER_PADDINGS, CONTAINER_MAX_WIDTH } from '../style/config/theme';

const containerMaxWidth =
  parseInt(CONTAINER_MAX_WIDTH) + parseInt(CONTAINER_PADDINGS.mob) * 2;

export const Container = styled.div`
  ${marginX()};
  ${paddingX(CONTAINER_PADDINGS)};
  width: 100%;
  max-width: ${containerMaxWidth}px;
`;
