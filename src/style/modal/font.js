import { mq } from './';

export const font = (props) => {
  let str = ``;

  for (const [key, value] of Object.entries(props)) {
    str += mq(key, value);
  }

  return str;
};
