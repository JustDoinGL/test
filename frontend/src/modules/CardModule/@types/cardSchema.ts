import { CardTypes } from '@/assets';
import { z } from 'zod';

const baseSchema = z.object({
  id: z.number().optional(),
  name: z.string().min(1, 'Название обязательно'),
  description: z.string().min(1, 'Описание обязательно'),
  location: z.string().min(1, 'Локация обязательна'),
  photo: z.string().optional(),
});

const realEstateSchema = baseSchema.extend({
  type: z.literal(CardTypes.REAL_ESTATE),
  propertyType: z.string().min(1, 'Тип недвижимости обязателен'),
  area: z.number().min(1, 'Площадь обязательна'),
  rooms: z.number().min(1, 'Количество комнат обязательно'),
  price: z.number().min(1, 'Цена обязательна'),
});

const autoSchema = baseSchema.extend({
  type: z.literal(CardTypes.AUTO),
  brand: z.string().min(1, 'Марка обязательна'),
  model: z.string().min(1, 'Модель обязательна'),
  year: z.number().min(1900, 'Год выпуска обязателен'),
  mileage: z.number().min(0, 'Пробег обязателен'),
});

const serviceSchema = baseSchema.extend({
  type: z.literal(CardTypes.SERVICES),
  serviceType: z.string().min(1, 'Тип услуги обязателен'),
  experience: z.number().min(0, 'Опыт работы обязателен'),
  cost: z.number().min(1, 'Стоимость обязательна'),
  schedule: z.string().optional(),
});

export const cardSchemaFirst = baseSchema.extend({
  type: z.union([
    z.literal(CardTypes.REAL_ESTATE),
    z.literal(CardTypes.AUTO),
    z.literal(CardTypes.SERVICES),
  ]),
});

export const cardSchemaSecond = z.discriminatedUnion('type', [
  realEstateSchema,
  autoSchema,
  serviceSchema,
]);

export type CardUpdateFirst = z.infer<typeof cardSchemaFirst>;

export type CardUpdateSecond = z.infer<typeof cardSchemaSecond>;

export type ServiceSchema = z.infer<typeof serviceSchema>;
export type AutoSchema = z.infer<typeof autoSchema>;
export type RealEstateSchema = z.infer<typeof realEstateSchema>;
