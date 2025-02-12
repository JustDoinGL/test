import { useQuery } from '@tanstack/react-query';
import { cardListApi } from '../api/api';

export function useGetList(id: string) {
  const {
    data: card,
    error,
    isLoading,
    refetch,
  } = useQuery({
    ...cardListApi.getCard(id),
  });

  return { error, card, isLoading, refetch };
}
