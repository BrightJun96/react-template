import React from 'react';
import ReactDOM from 'react-dom/client';
// ROUTER
import { Router } from '@/router';
import { RouterProvider } from 'react-router-dom';
// THEMES
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CookiesProvider } from 'react-cookie';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './themes/base';
import GlobalTheme from './themes/theme';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={GlobalTheme}>
      <QueryClientProvider client={queryClient}>
        <CookiesProvider>
          <GlobalStyle />
          <RouterProvider router={Router} />
        </CookiesProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);
