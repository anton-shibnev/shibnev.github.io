import { mq } from './';

export const marginX = (left = 'auto', right = left) => {
  const init = `margin-left: ${left}; margin-right: ${right};`;

  // if (left === Arr)

  return init;
};

export const marginTop = (thing) => mq('margin-top', thing);
export const marginBottom = (thing) => mq('margin-bottom', thing);
export const marginLeft = (thing) => mq('margin-left', thing);
export const marginRight = (thing) => mq('margin-right', thing);
export const margin = (thing) => mq('margin', thing);
