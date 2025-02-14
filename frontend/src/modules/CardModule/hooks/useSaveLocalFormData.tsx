import { useEffect, useState } from 'react';
import { CardDto } from '../types/cardDto';

const localStorageKey = 'formDataGithub@JustDoinG';

/**
 * Кастомный хук для работы с данными формы.
 * Управляет данными в localStorage, поддерживая только два значения: -1 и id.
 * При получении нового изменения в новом id удаляет старый.
 */
export const useSaveLocalFormData = (apiData?: CardDto) => {
  const [formData, setFormData] = useState<CardDto | undefined>(apiData);

  // Функция для получения ключа localStorage на основе ID
  const getStorageKey = (id: number): string => {
    return `${localStorageKey}_${id}`;
  };

  useEffect(() => {
    const id = apiData?.id;
    const storageKey = getStorageKey(typeof id === 'number' ? id : -1); // Из-за того что id может быть равен 0
    const savedData = localStorage.getItem(storageKey);

    if (savedData) {
      const parsedData = JSON.parse(savedData) as CardDto;
      setFormData(parsedData);
    } else if (apiData) {
      setFormData(apiData);
    }
  }, [apiData]);

  // Сохранение данных в localStorage
  const saveFormData = (data: CardDto) => {
    const id = data.id;
    const storageKey = getStorageKey(typeof id === 'number' ? id : -1); // Из-за того что id может быть равен 0

    // Если ID определен и не равен -1, очищаем все другие ID в localStorage которые не имют -1
    if (id && id !== -1) {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        console.log(key);
        if (
          key &&
          key.startsWith(localStorageKey + '_') &&
          key !== getStorageKey(-1) &&
          !isNaN(Number(key.split('_')[1]))
        ) {
          localStorage.removeItem(key);
        }
      }
    }

    localStorage.setItem(storageKey, JSON.stringify(data));
    setFormData(data);
  };

  // Очистка данных из localStorage
  const clearFormData = (id: number) => {
    const storageKey = getStorageKey(id);
    localStorage.removeItem(storageKey);
  };

  return {
    formData,
    saveFormData,
    clearFormData,
  };
};
