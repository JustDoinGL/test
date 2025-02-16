import { screen } from '@testing-library/react';
import { useCheckAuth } from '@/modules';
import { vi, Mock } from 'vitest';
import { PrivateRouteProvider, renderWithProviders } from '@/shared';
import { PATHS } from '@/assets';

vi.mock('@/modules', () => ({
  useCheckAuth: vi.fn(() => ({
    isLoading: false,
    isSuccess: false,
    isError: false,
  })),
  LogOutButton: vi.fn(() => <div data-testid='login-form'>Mocked LoginForm</div>),
}));

describe('PrivateRouteProvider', () => {
  test('should redirect to home if authentication is successful', () => {
    (useCheckAuth as Mock).mockReturnValue({
      isSuccess: false,
    });

    renderWithProviders(<PrivateRouteProvider />, { initialEntries: [PATHS.formPage] });

    expect(screen.queryByTestId(PATHS.formPage)).not.toBeInTheDocument();
  });
});
