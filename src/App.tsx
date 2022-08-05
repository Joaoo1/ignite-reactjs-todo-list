import { ThemeProvider } from 'styled-components';
import { TaskProvider } from './hooks/useTasks';
import { Router } from './Router';
import { GlobalStyle } from './styles/global';

import { defaultTheme } from './styles/themes/default';

export const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <TaskProvider>
      <Router />
    </TaskProvider>

    <GlobalStyle />
  </ThemeProvider>
);
