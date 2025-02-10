import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { CustomThemeProvider, queryClient } from '@/shared';
import { BrowserRouter } from 'react-router';
import { QueryClientProvider } from '@tanstack/react-query';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <CustomThemeProvider>
        <App />
      </CustomThemeProvider>
    </QueryClientProvider>
  </BrowserRouter>
);
