import { FONT_SIZE } from '../config/theme';

export const rem = (px) => {
  return `${(parseInt(px) / parseInt(FONT_SIZE)).toFixed(3)}rem`;
};
