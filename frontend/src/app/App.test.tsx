import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import App from './App';
import { PATHS } from '@/assets';

describe('App routing', () => {
  test('renders ListPage on /list route', () => {
    render(
      <MemoryRouter initialEntries={[PATHS.mainPage]}>
        <App />
      </MemoryRouter>
    );

    const element = screen.getByTestId(PATHS.mainPage);
    expect(element).toBeInTheDocument();
  });

  test('renders FormPage on /form route', () => {
    render(
      <MemoryRouter initialEntries={[PATHS.formPage]}>
        <App />
      </MemoryRouter>
    );

    const element = screen.getByTestId(PATHS.formPage);
    expect(element).toBeInTheDocument();
  });

  test('renders ItemPage on /item/:id route', () => {
    const itemId = '123';
    render(
      <MemoryRouter initialEntries={[`${PATHS.itemPage}/${itemId}`]}>
        <App />
      </MemoryRouter>
    );

    const element = screen.getByTestId(PATHS.itemPage);
    expect(element).toBeInTheDocument();
  });

  test('renders NotFoundPage on invalid route', () => {
    render(
      <MemoryRouter initialEntries={['/invalid-route']}>
        <App />
      </MemoryRouter>
    );

    const element = screen.getByTestId('NotFoundPage');
    expect(element).toBeInTheDocument();
  });
});
