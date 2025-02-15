import { useMutation, useQueryClient } from '@tanstack/react-query';
import { authListApi, LogoutResponse } from '../api/api';
import { removeToken } from '@/shared';

export const useLogOut = () => {
  const queryClient = useQueryClient();

  return useMutation<LogoutResponse, Error>({
    mutationFn: () => authListApi.logout(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [authListApi.baseKey, 'checkAuth'] });
      removeToken();
    },
    onError: (error) => {
      console.error('Ошибка при выходе:', error);
    },
  });
};
