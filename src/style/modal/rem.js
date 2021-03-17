import { FONT_SIZE } from '../config/theme';

export const rem = (thing) => {
  const init = (str) => {
    return `${(parseInt(str) / parseInt(FONT_SIZE)).toFixed(6)}rem`;
  };

  return String(thing)
    .split(' ')
    .map((item) => {
      if (item.indexOf('px') >= 1) {
        return init(item);
      }
      return item;
    })
    .join(' ');
};
