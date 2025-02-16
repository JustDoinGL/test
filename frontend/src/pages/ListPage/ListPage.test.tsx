import { screen } from '@testing-library/react';
import { renderWithProviders } from '@/shared';
import { PATHS } from '@/assets';
import App from 'src/app/App';

describe('ListPage', () => {
  test('renders ListPage on /list route', () => {
    renderWithProviders(<App />, { initialEntries: [PATHS.mainPage] });

    const element = screen.getByTestId(PATHS.mainPage);
    expect(element).toBeInTheDocument();
  });
});
