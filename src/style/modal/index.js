import { mq } from './mq';

export { mq } from './mq';
export { circle } from './circle';
export { font } from './font';
export { hoverFocus } from './hoverFocus';
export {
  margin,
  marginX,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
} from './margin';
export { padding, paddingY, paddingX } from './padding';
export { rem } from './rem';
export { rgba } from './rgba';
export { transition } from './transition';
export { wh, maxWidth } from './wh';


// common
export const display = (thing) => mq('display', thing);
export const gridTemplateAreas = (thing) => mq('grid-template-areas', thing);
export const justifyContent = (thing) => mq('justify-content', thing);
