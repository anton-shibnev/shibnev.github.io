import { mq } from './';

export const maxWidth = (thing) => mq('max-width', thing);

export const wh = (...args) => {
  const init = (width = 'auto', height = width) => `
    width: ${width};
    height: ${height};
  `;

  return init(args);
};
