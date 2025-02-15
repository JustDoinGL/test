import { useMutation, useQueryClient } from '@tanstack/react-query';
import { cardListApi } from '../api/api';
import { CardUpdateSecond } from '../types/cardSchema';

export const useUpdateCard = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CardUpdateSecond & { id: number }) => cardListApi.updateCard(data),
    onSuccess: () => {
      queryClient.invalidateQueries(cardListApi.getCardListInfinityQueryOptions());
    },
    onError: (error) => {
      console.error('Ошибка при обновлении карточки:', error);
    },
  });
};
