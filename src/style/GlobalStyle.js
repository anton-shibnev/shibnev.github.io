import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize};
  ${
    '' /* @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&display=swap'); */
  }

  * {
    box-sizing: border-box;

    &::before,
    &::after {
      box-sizing: border-box;
    }
  }

  body {
    color: ${(props) => props.theme.typography.COLOR};
    font-size: ${(props) => props.theme.typography.FONT_SIZE};
    font-family: ${(props) => props.theme.typography.FONT_FAMILY};
    line-height: ${(props) => props.theme.typography.LINE_HEIGHT};
    font-weight: ${(props) => props.theme.typography.FONT_WEIGHT};
  }
`;
