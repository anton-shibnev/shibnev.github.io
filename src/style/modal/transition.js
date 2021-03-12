import { TRANSITION } from '../config/theme';

export const transition = (...args) => {
  return `transition : ${args
    .map((item) => `${item} ${TRANSITION}`)
    .join(', ')}`;
};
