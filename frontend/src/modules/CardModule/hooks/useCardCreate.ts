import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CardUpdateSecond } from '../types/cardSchema';
import { cardListApi } from '../api/api';
import { CardDto } from '../types/cardDto';

type PaginatedResult<T> = {
  pages: {
    items: T[];
    currentPage: number;
    totalPages: number;
    totalItems: number;
  }[];
};

export const useCardCreate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CardUpdateSecond) => cardListApi.createCard(data),
    onSuccess: (newCard) => {
      queryClient.invalidateQueries({ queryKey: [cardListApi.baseKey] });

      // Вручную добавляем новую карточку в кэш
      queryClient.setQueryData(
        [cardListApi.baseKey, 'list', ''],
        (oldData: PaginatedResult<CardDto> | undefined) => {
          if (!oldData) {
            return {
              pages: [
                {
                  items: [newCard],
                  currentPage: 1,
                  totalPages: 1,
                  totalItems: 1,
                },
              ],
            };
          }

          return {
            ...oldData,
            pages: [
              {
                items: [newCard, ...oldData.pages[0].items],
                currentPage: 1,
                totalPages: oldData.pages[0].totalPages,
                totalItems: oldData.pages[0].totalItems + 1,
              },
              ...oldData.pages.slice(1),
            ],
          };
        }
      );
    },
    onError: (error) => {
      console.error('Ошибка при создании карточки:', error);
    },
  });
};
