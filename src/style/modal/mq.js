import { BREAKPOINTS } from '../config/theme';

export const mq = (styleKey, obj) => {
  let str = ``;

  for (const key in obj) {
    let styleValue = obj[key];
    let breakPointsValue = BREAKPOINTS[key];

    if (!key) continue;

    str += `@media only screen and (min-width: ${breakPointsValue}) {
      ${styleKey}: ${styleValue};
    }`;
  }
  return str;
};
