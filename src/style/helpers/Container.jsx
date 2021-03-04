import styled from 'styled-components/macro'
import marginX from '../mixins/margin'
import paddingX from '../mixins/padding'

const CONTAINER_MAX_WIDTH = `936px`
const CONTAINER_PADDINGS = {
  mob: '10px',
  xs: '20px',
  md: '30px',
  lg: '40px',
}

const Container = styled.div`
  ${ marginX() };
  ${ paddingX(CONTAINER_PADDINGS) };
  //width: 100%;
  max-width: ${ parseInt(CONTAINER_MAX_WIDTH) + parseInt(CONTAINER_PADDINGS.mob) * 2 }px;
`

export default Container
