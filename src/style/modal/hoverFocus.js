import { css } from 'styled-components';

export const hoverFocus = (...args) => {
  return css`
    &:hover,
    &:focus {
      outline: none;
      ${css(...args)}
    }
  `;
};
