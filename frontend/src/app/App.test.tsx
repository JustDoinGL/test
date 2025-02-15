import { screen } from '@testing-library/react';
import App from './App';
import { PATHS } from '@/assets';
import { renderWithProviders } from '@/shared';

describe('App routing', () => {
  test('renders ListPage on /list route', () => {
    renderWithProviders(<App />, { initialEntries: [PATHS.mainPage] });

    const element = screen.getByTestId(PATHS.mainPage);
    expect(element).toBeInTheDocument();
  });

  // test('renders FormPage on /form route', () => {
  //   renderWithProviders(<App />, { initialEntries: [PATHS.formPage] });

  //   const element = screen.getByTestId(PATHS.formPage);
  //   expect(element).toBeInTheDocument();
  // });

  test('renders ItemPage on /item/:id route', () => {
    const itemId = '123';
    renderWithProviders(<App />, { initialEntries: [`${PATHS.itemPage}/${itemId}`] });

    const element = screen.getByTestId(PATHS.itemPage);
    expect(element).toBeInTheDocument();
  });

  test('renders NotFoundPage on invalid route', () => {
    renderWithProviders(<App />, { initialEntries: ['/invalid-route'] });

    const element = screen.getByTestId('NotFoundPage');
    expect(element).toBeInTheDocument();
  });
});
