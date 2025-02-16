import { screen } from '@testing-library/react';
import { renderWithProviders } from '@/shared';
import { PATHS } from '@/assets';
import App from 'src/app/App';

describe('ItemPage', () => {
  test('renders ItemPage on /item/:id route', () => {
    const itemId = '123';
    renderWithProviders(<App />, { initialEntries: [`${PATHS.itemPage}/${itemId}`] });

    const element = screen.getByTestId(PATHS.itemPage);
    expect(element).toBeInTheDocument();
  });

  test('has a back button to return to the list', () => {
    const itemId = '123';
    renderWithProviders(<App />, { initialEntries: [`${PATHS.itemPage}/${itemId}`] });

    const backButton = screen.getByRole('button', { name: /Назад/i });
    expect(backButton).toBeInTheDocument();
  });
});
