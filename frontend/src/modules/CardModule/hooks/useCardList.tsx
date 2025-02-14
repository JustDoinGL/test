import { useInfiniteQuery } from '@tanstack/react-query';
import { cardListApi } from '../api/api';
import { useCustomSearchParams } from './useCustomSearchParams';

export const useCardList = () => {
  const { searchParams } = useCustomSearchParams();

  const {
    data: cardItems,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    ...cardListApi.getCardListInfinityQueryOptions(searchParams),
  });

  return { error, cardItems, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage };
};
