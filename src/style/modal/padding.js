import { rem } from './rem';
import { mq } from './mq';

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
