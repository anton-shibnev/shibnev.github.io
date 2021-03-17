import { css } from 'styled-components';

export const absCenter = (axis) => {
  let str = `
    position: absolute;
  `;

  if (axis === 'x') {
    str += `
      left: 50%;
      transform: translateX(-50%);
    `;
  } else if (axis === 'y') {
    str += `
      top: 50%;
      transform: translateY(-50%);
    `;
  } else {
    str += `
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    `;
  }

  return css`
    ${str}
  `;
};
