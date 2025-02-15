import { jsonApiInstance } from '@/shared';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  token?: string;
  message?: string;
}

export interface LogoutResponse {
  success: boolean;
  message?: string;
}

export interface CheckAuthResponse {
  success: boolean;
  user?: {
    id: number;
    username: string;
  };
  message?: string;
}

export const authListApi = {
  baseKey: 'auth',

  login: (data: LoginRequest) => {
    return jsonApiInstance<LoginResponse>(`/login`, {
      method: 'POST',
      json: data,
    });
  },

  logout: () => {
    return jsonApiInstance<LogoutResponse>(
      `/logout`,
      {
        method: 'POST',
      },
      true
    );
  },

  checkAuth: () => {
    return jsonApiInstance<CheckAuthResponse>(
      `/check-auth`,
      {
        method: 'GET',
      },
      true
    );
  },
};
