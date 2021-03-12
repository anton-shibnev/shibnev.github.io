import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as theme from './style/config/theme';
import { GlobalStyle } from './style/GlobalStyle';
import { ThemeProvider } from 'styled-components';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
