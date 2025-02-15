import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CardUpdateSecond } from '../types/cardSchema';
import { cardListApi } from '../api/api';

export const useCardCreate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CardUpdateSecond) => cardListApi.createCard(data),
    onSuccess: () => {
      queryClient.invalidateQueries(cardListApi.getCardListInfinityQueryOptions());
    },
    onError: (error) => {
      console.log('Ошибка при создании карточки:', error);
    },
  });
};
