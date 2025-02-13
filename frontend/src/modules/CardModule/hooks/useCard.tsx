import { QueryObserverResult, RefetchOptions, useQuery } from '@tanstack/react-query';
import { CardDto } from '../types/cardDto';
import { cardListApi } from '../api/api';

type TUseGetCard = (
  id: string | null,
  isValidId?: boolean | '' | null
) => {
  error: Error | null;
  card: CardDto | undefined;
  refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<CardDto, Error>>;
  isLoading: boolean;
};

export const useGetCard: TUseGetCard = (id, isValidId = true) => {
  const {
    data: card,
    error,
    isLoading,
    refetch,
  } = useQuery({
    ...cardListApi.getCard(id),
    enabled: !!isValidId && !!id,
  });

  return { error, card, isLoading, refetch };
};
