import { screen } from '@testing-library/react';
import { renderWithProviders } from '@/shared';
import App from 'src/app/App';

describe('NotFoundPage', () => {
  test('renders NotFoundPage on invalid route', () => {
    renderWithProviders(<App />, { initialEntries: ['/invalid-route'] });

    const element = screen.getByTestId('NotFoundPage');
    expect(element).toBeInTheDocument();
  });
});
