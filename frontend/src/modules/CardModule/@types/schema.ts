import { z } from 'zod';

const baseSchema = z.object({
  id: z.number().optional(),
  name: z.string().min(1, 'Название обязательно'),
  description: z.string().min(1, 'Описание обязательно'),
  location: z.string().min(1, 'Локация обязательна'),
  photo: z.string().optional(),
});

const realEstateSchema = baseSchema.extend({
  type: z.literal('Недвижимость'),
  propertyType: z.string().min(1, 'Тип недвижимости обязателен'),
  area: z.number().min(1, 'Площадь обязательна'),
  rooms: z.number().min(1, 'Количество комнат обязательно'),
  price: z.number().min(1, 'Цена обязательна'),
});

const autoSchema = baseSchema.extend({
  type: z.literal('Авто'),
  brand: z.string().min(1, 'Марка обязательна'),
  model: z.string().min(1, 'Модель обязательна'),
  year: z.number().min(1900, 'Год выпуска обязателен'),
  mileage: z.number().min(0, 'Пробег обязателен'),
});

const serviceSchema = baseSchema.extend({
  type: z.literal('Услуги'),
  serviceType: z.string().min(1, 'Тип услуги обязателен'),
  experience: z.number().min(0, 'Опыт работы обязателен'),
  cost: z.number().min(1, 'Стоимость обязательна'),
  schedule: z.string().optional(),
});

export const cardSchema = z.discriminatedUnion('type', [
  realEstateSchema,
  autoSchema,
  serviceSchema,
]);

export type CardUpdate = z.infer<typeof cardSchema>;
