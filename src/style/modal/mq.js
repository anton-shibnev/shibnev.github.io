import { BREAKPOINTS } from '../config/theme';
import { rem } from './rem';

export const mq = (styleKey, thing, toRem = true) => {
  let str = ``;

  const init = (styleKey, styleValue) => {
    return `${styleKey}: ${toRem ? rem(styleValue) : styleValue};`;
  };

  if (typeof thing === 'object') {
    for (const key in thing) {
      let styleValue = thing[key];
      let breakPointsValue = BREAKPOINTS[key];
      let firstKey = Object.keys(BREAKPOINTS)[0];

      if (!key) continue;

      if (key === firstKey) {
        str += init(styleKey, styleValue);
      } else {
        str += `@media only screen and (min-width: ${breakPointsValue}) {
       ${init(styleKey, styleValue)};
      }`;
      }
    }
  } else {
    str += init(styleKey, thing);
  }

  return str;
};
