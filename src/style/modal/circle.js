import { wh } from './';

export const circle = (...args) => {
  return `
    ${wh(args)};
    border-radius: 50%;
    overflow: hidden;
    display: block;
  `;
};
