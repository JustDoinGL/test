import { getToken } from './validateAuthToken';

const BASE_URL = import.meta.env.BACKEND_URL;

class ApiError extends Error {
  constructor(public response: Response) {
    super('ApiError:' + response.status);
  }
}

export const jsonApiInstance = async <T>(url: string, init?: RequestInit & { json?: unknown }) => {
  const token = getToken();

  const headers = new Headers(init?.headers);
  headers.set('Authorization', `Bearer ${token}`);

  if (init?.json) {
    headers.set('Content-Type', 'application/json');
    init.body = JSON.stringify(init.json);
  }

  const result = await fetch(`${BASE_URL}${url}`, {
    ...init,
    headers,
  });

  if (!result.ok) {
    throw new ApiError(result);
  }

  const data = (await result.json()) as Promise<T>;

  return data;
};
