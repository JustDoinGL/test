import { jsonApiInstance } from '@/shared';
import { infiniteQueryOptions, queryOptions } from '@tanstack/react-query';
import { CardDto } from '../types/cardDto';
import { CardUpdateSecond } from '../types/cardSchema';

export type PaginatedResult<T> = {
  items: T[];
  currentPage: number;
  totalPages: number;
  totalItems: number;
};

export const cardListApi = {
  baseKey: 'card',

  getCard: (id: string | null) => {
    return queryOptions({
      queryKey: [cardListApi.baseKey, 'list', id],
      queryFn: (meta) =>
        jsonApiInstance<CardDto>(`/items/${id}`, {
          signal: meta.signal,
        }),
    });
  },

  getCardListInfinityQueryOptions: () => {
    return infiniteQueryOptions({
      queryKey: [cardListApi.baseKey, 'list'],
      queryFn: (meta) =>
        jsonApiInstance<PaginatedResult<CardDto>>(`/items?page=${meta.pageParam}&limit=5`, {
          signal: meta.signal,
        }),
      initialPageParam: 1,
      getNextPageParam: ({ totalPages, currentPage }) =>
        totalPages > currentPage ? currentPage + 1 : null,
      select: (data) => data.pages.flatMap((page) => page.items),
    });
  },

  createCard: (data: CardUpdateSecond) => {
    return jsonApiInstance<CardUpdateSecond>(`/items`, {
      method: 'POST',
      json: data,
    });
  },

  updateCard: (data: CardUpdateSecond & { id: number }) => {
    return jsonApiInstance<CardUpdateSecond>(`/items/${data.id}`, {
      method: 'PUT',
      json: data,
    });
  },

  deleteCard: (id: number) => {
    return jsonApiInstance(`/items/${id}`, {
      method: 'DELETE',
    });
  },
};
