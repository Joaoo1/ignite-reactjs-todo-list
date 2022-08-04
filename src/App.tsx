import { ThemeProvider } from 'styled-components';
import { Router } from './Router';
import { GlobalStyle } from './styles/global';

import { defaultTheme } from './styles/themes/default';

export const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <Router />

    <GlobalStyle />
  </ThemeProvider>
);
