import rem from './rem'
import { mq } from './mq'

export const paddingX = (left = '0', right = left) => {
  const init = (left = '0', right = left) => `
    padding-left: ${ rem(left) };
    padding-right: ${ rem(right) };`

  let result = ``;

  if (typeof left === 'object') {
    result += mq( 'padding-left', left);
    result += mq( 'padding-right', left);
  } else {
    result += init(left, right)
  }

  return result
}


