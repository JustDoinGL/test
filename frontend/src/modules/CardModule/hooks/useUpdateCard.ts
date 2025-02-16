import { useMutation, useQueryClient } from '@tanstack/react-query';
import { cardListApi } from '../api/api';
import { CardUpdateSecond } from '../types/cardSchema';
import { CardDto } from '../types/cardDto';

type PaginatedResult<T> = {
  pages: {
    items: T[];
    currentPage: number;
    totalPages: number;
    totalItems: number;
  }[];
};

export const useUpdateCard = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CardUpdateSecond & { id: number }) => cardListApi.updateCard(data),
    onSuccess: (updatedCard) => {
      queryClient.invalidateQueries({ queryKey: [cardListApi.baseKey] });

      // Вручную обновляем кэш
      queryClient.setQueryData(
        [cardListApi.baseKey, 'list', ''],
        (oldData: PaginatedResult<CardDto> | undefined) => {
          if (!oldData) return oldData;

          // Обновляем карточку в кэше
          const updatedPages = oldData.pages.map((page) => ({
            ...page,
            items: page.items.map((item) => (item.id === updatedCard.id ? updatedCard : item)),
          }));

          return {
            ...oldData,
            pages: updatedPages,
          };
        }
      );
    },
    onError: (error) => {
      console.error('Ошибка при обновлении карточки:', error);
    },
  });
};
