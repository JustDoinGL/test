import { getToken } from './validateAuthToken';

const BASE_URL = import.meta.env.BACKEND_URL;

// Кастомный класс для ошибок API
class ApiError extends Error {
  constructor(public response: Response) {
    super(`API Error: ${response.status} - ${response.statusText}`);
    this.name = 'ApiError';
  }
}

export const jsonApiInstance = async <T>(
  url: string,
  init?: RequestInit & { json?: unknown },
  requiresAuth: boolean = false
): Promise<T> => {
  const headers = new Headers(init?.headers);

  if (requiresAuth) {
    const token = getToken();

    if (!token) {
      throw new Error('Authorization token is missing');
    }

    headers.set('Authorization', `Bearer ${token}`);
  }

  if (init?.json) {
    headers.set('Content-Type', 'application/json');
    init.body = JSON.stringify(init.json);
  }

  const response = await fetch(`${BASE_URL}${url}`, {
    ...init,
    headers,
  });

  if (!response.ok) {
    throw new ApiError(response);
  }

  return response.json() as Promise<T>;
};
