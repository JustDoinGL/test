import { render, RenderOptions } from '@testing-library/react';
import { MemoryRouter, MemoryRouterProps } from 'react-router';
import { QueryClientProvider } from '@tanstack/react-query';
import { CustomThemeProvider, queryClient } from '@/shared';
import { ReactElement } from 'react';

interface CustomRenderOptions extends RenderOptions {
  initialEntries?: MemoryRouterProps['initialEntries'];
}

const renderWithProviders = (
  ui: ReactElement,
  { initialEntries = ['/'], ...options }: CustomRenderOptions = {}
) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <QueryClientProvider client={queryClient}>
        <CustomThemeProvider>{ui}</CustomThemeProvider>
      </QueryClientProvider>
    </MemoryRouter>,
    options
  );
};

export { renderWithProviders };
