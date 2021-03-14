import { mq } from './mq';
import { circle } from './circle';
import { font } from './font';
import { hoverFocus } from './hoverFocus';
// import {
// margin,
// marginX,
// marginTop,
// marginBottom,
// marginLeft,
// marginRight,
// } from './margin';
import { padding, paddingY, paddingX } from './padding';
import { rem } from './rem';
import { rgba } from './rgba';
import { transition } from './transition';
import { wh, maxWidth } from './wh';

export const display = (thing) => mq('display', thing);
export const gridTemplateAreas = (thing) => mq('grid-template-areas', thing);
export const justifyContent = (thing) => mq('justify-content', thing);

export {
  circle,
  font,
  hoverFocus,
  mq,
  padding,
  paddingY,
  paddingX,
  rem,
  rgba,
  transition,
  wh,
  maxWidth,
  // margin,
  // marginX,
  // marginTop,
  // marginBottom,
  // marginLeft,
  // marginRight,
};
