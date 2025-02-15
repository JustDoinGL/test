import { useMutation, useQueryClient } from '@tanstack/react-query';
import { authListApi, LoginResponse } from '../api/api';
import { AuthFormData } from '../types/authSchema';
import { setToken } from '@/shared';

export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation<LoginResponse, Error, AuthFormData>({
    mutationFn: (data: AuthFormData) => authListApi.login(data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [authListApi.baseKey, 'checkAuth'] });
      if (data.token) {
        setToken(data.token);
      }
    },
    onError: (error) => {
      console.log('Ошибка при входе:', error);
    },
  });
};
