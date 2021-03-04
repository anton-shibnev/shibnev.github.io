import { FONT_SIZE } from '../config/typography'

const rem = px => {
  return `${ (parseInt(px) / parseInt(FONT_SIZE)).toFixed(3) }rem`
}

export default rem;
