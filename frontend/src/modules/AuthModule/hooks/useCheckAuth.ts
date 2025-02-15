import { useQuery } from '@tanstack/react-query';
import { authListApi } from '../api/api';

export const useCheckAuth = () => {
  return useQuery({
    queryKey: ['checkAuth'],
    retry: 0,
    queryFn: () => authListApi.checkAuth(),
  });
};
