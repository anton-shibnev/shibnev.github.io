import { css } from 'styled-components';
import { rem } from './rem';

export const flexGap = (gap) => {
  const halfGap = `${parseInt(gap) / 2}px`;
  const remGap = rem(halfGap);

  return css`
    display: flex;
    flex-wrap: wrap;
    margin: -${remGap} 0 0 -${remGap};

    > * {
      margin: ${remGap} 0 0 ${remGap};
    }
  `;
};
