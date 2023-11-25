import React from 'react';
import ReactDOM from 'react-dom/client';
// ROUTER
import { RouterProvider } from 'react-router-dom';
import { Router } from '@/router';
// THEMES
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './themes/base';
import GlobalTheme from './themes/theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={GlobalTheme}>
      <GlobalStyle />
      <RouterProvider router={Router} />
    </ThemeProvider>
  </React.StrictMode>
);
