import { useInfiniteQuery } from '@tanstack/react-query';
import { cardListApi } from '../api/api';

export function useCardList() {
  const {
    data: cardItems,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    ...cardListApi.getCardListInfinityQueryOptions(),
  });

  return { error, cardItems, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage };
}
