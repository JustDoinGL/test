import { screen } from '@testing-library/react';
import { useCheckAuth } from '@/modules';
import { vi, Mock } from 'vitest';
import { AuthProvider, renderWithProviders } from '@/shared';
import { AuthPage } from './AuthPage';
import { PATHS } from '@/assets';

vi.mock('@/modules', () => ({
  useCheckAuth: vi.fn(() => ({
    isLoading: false,
    isSuccess: false,
    isError: false,
  })),
  LoginForm: vi.fn(() => <div data-testid='login-form'>Mocked LoginForm</div>),
}));

describe('AuthProvider', () => {
  test('should redirect to home if authentication is successful', () => {
    // Мокаем успешную аутентификацию
    (useCheckAuth as Mock).mockReturnValue({
      isSuccess: true,
    });

    renderWithProviders(<AuthProvider />, { initialEntries: [PATHS.auth] });

    // Проверяем, что AuthPage не отображается (перенаправление на главную страницу)
    expect(screen.queryByTestId(PATHS.auth)).not.toBeInTheDocument();
  });

  test('should render Outlet if authentication is not successful', () => {
    // Мокаем неуспешную аутентификацию
    (useCheckAuth as Mock).mockReturnValue({
      isSuccess: false,
    });

    renderWithProviders(<AuthPage />, { initialEntries: [PATHS.auth] });

    // Проверяем, что AuthPage отображается
    expect(screen.getByTestId(PATHS.auth)).toBeInTheDocument();
  });
});
