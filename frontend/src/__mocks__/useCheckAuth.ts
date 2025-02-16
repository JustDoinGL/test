import { vi } from 'vitest';

export const useCheckAuth = vi.fn(() => ({
  isLoading: false,
  isSuccess: false,
  isError: false,
}));
