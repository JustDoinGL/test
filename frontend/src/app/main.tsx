import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { CustomThemeProvider, queryClient } from '@/shared';
import { BrowserRouter } from 'react-router';
import { QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { CustomError } from '@/ui';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <CustomThemeProvider>
        <ErrorBoundary fallback={<CustomError />}>
          <App />
        </ErrorBoundary>
      </CustomThemeProvider>
    </QueryClientProvider>
  </BrowserRouter>
);
