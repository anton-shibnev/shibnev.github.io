import { rem, mq } from './';

export const paddingX = (thing = '0', right = thing) => {
  const init = (left = '0', right = left) => `
    padding-left: ${rem(left)};
    padding-right: ${rem(right)};`;

  let result = ``;

  if (typeof thing === 'object') {
    result += mq('padding-left', thing);
    result += mq('padding-right', thing);
  } else {
    result += init(thing, right);
  }

  return result;
};

export const paddingY = (thing = '0', bottom = thing) => {
  const init = (top = '0', bottom = top) => `
    padding-top: ${rem(top)};
    padding-bottom: ${rem(bottom)};`;

  let result = ``;

  if (typeof thing === 'object') {
    result += mq('padding-top', thing);
    result += mq('padding-bottom', thing);
  } else {
    result += init(thing, bottom);
  }

  return result;
};

export const padding = (thing) => mq('padding', thing);
