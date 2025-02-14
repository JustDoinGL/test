import {
  CAR_VALUES,
  CardTypes,
  PROPERTY_VALUES,
  SERVICE_VALUES,
  toNumberZodHelper,
  toOptionalNumberZodHelper,
} from '@/assets';
import { z } from 'zod';

const baseSchema = z.object({
  id: z.number().optional(),
  name: z.string().min(1, 'Название обязательно').max(100, 'Длина названия максиму 100 символов'),
  description: z
    .string()
    .min(10, 'Описание не может быть короче 10 символов')
    .max(9_999_999, 'Слишком длинное описание'),
  location: z.string().min(1, 'Локация обязательна').max(99, 'Слишком длинное название локации'),
  photo: z
    .string()
    .max(999_999_999, 'Слишком длинная сылка')
    .refine(
      (value: string) => {
        const words = value.trim().split(/\s+/); // Разбиваем текст по пробелам
        if (words.length === 1) return true; // Одно слово — валидно
        try {
          new URL(value); // Проверяем, является ли текст валидным URL
          return true;
        } catch {
          return false;
        }
      },
      { message: 'Если больше одного слова, то должен быть валидный URL' }
    )
    .optional(),
});

const realEstateSchema = baseSchema.extend({
  type: z.literal(CardTypes.REAL_ESTATE),
  propertyType: z.enum(PROPERTY_VALUES),
  area: z.preprocess(
    toNumberZodHelper,
    z.number().min(1, 'Площадь обязательна').max(10_000, 'Максимальная площадь - 10 000')
  ),
  rooms: z.preprocess(
    toNumberZodHelper,
    z
      .number()
      .min(1, 'Количество комнат обязательно')
      .max(100, 'Максимальное количество комнат 100')
  ),
  price: z.preprocess(
    toNumberZodHelper,
    z
      .number()
      .min(1, 'Цена обязательна')
      .max(999_999_999_999, 'Максимальное количество комнат 999 999 999 999')
  ),
});

const autoSchema = baseSchema.extend({
  type: z.literal(CardTypes.AUTO),
  brand: z.enum(CAR_VALUES),
  model: z.string().min(1, 'Модель обязательна'),
  year: z.preprocess(
    toNumberZodHelper,
    z
      .number()
      .min(1900, 'Год выпуска обязателен')
      .max(Number(new Date().getFullYear()), 'Этот год еще не наступил')
  ),

  mileage: z.preprocess(
    toOptionalNumberZodHelper,
    z
      .number()
      .max(999_999_999_999, 'Пробег не может быть больше 999 999 999 999')
      .nullable()
      .optional()
  ),
});

const serviceSchema = baseSchema.extend({
  type: z.literal(CardTypes.SERVICES),
  serviceType: z.enum(SERVICE_VALUES),
  experience: z.preprocess(
    toNumberZodHelper,
    z.number().min(0, 'Опыт работы обязателен').max(100, 'Слишком большой опыт работы')
  ),
  cost: z.preprocess(
    toNumberZodHelper,
    z
      .number()
      .min(1, 'Стоимость обязательна')
      .max(999_999_999_999_999, 'Максимальная стоимость 999 999 999 999 999')
  ),
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
