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
  name: z
    .string()
    .min(1, 'Название обязательно')
    .max(100, 'Длина названия не должна превышать 100 символов'),
  description: z
    .string()
    .min(10, 'Описание должно содержать минимум 10 символов')
    .max(9_999_999, 'Описание слишком длинное'),
  location: z.string().min(1, 'Локация обязательна').max(99, 'Название локации слишком длинное'),
  photo: z
    .string()
    .max(999_999_999, 'Ссылка слишком длинная')
    .refine((value) => {
      if (value.trim().split(/\s+/).length > 1) {
        try {
          new URL(value);
          return true;
        } catch {
          return false;
        }
      }
      return true; // Одно слово — валидно
    }, 'Если указано больше одного слова, это должен быть валидный URL')
    .optional(),
});

const realEstateSchema = baseSchema.extend({
  type: z.literal(CardTypes.REAL_ESTATE),
  propertyType: z.enum(PROPERTY_VALUES),
  area: z.preprocess(
    (el) => toNumberZodHelper(el),
    z.number().min(1, 'Площадь обязательна').max(10_000, 'Максимальная площадь — 10 000')
  ),
  rooms: z.preprocess(
    (el) => toNumberZodHelper(el),
    z
      .number()
      .min(1, 'Количество комнат обязательно')
      .max(100, 'Максимальное количество комнат — 100')
  ),
  price: z.preprocess(
    (el) => toNumberZodHelper(el),
    z
      .number()
      .min(1, 'Цена обязательна')
      .max(999_999_999_999, 'Максимальная цена — 999 999 999 999')
  ),
});

const autoSchema = baseSchema.extend({
  type: z.literal(CardTypes.AUTO),
  brand: z.enum(CAR_VALUES),
  model: z.string().min(1, 'Модель обязательна').max(100, 'Название модели слишком длинное'),
  year: z.preprocess(
    (el) => toNumberZodHelper(el),
    z
      .number()
      .min(1900, 'Год выпуска обязателен')
      .max(new Date().getFullYear(), 'Год не может быть в будущем')
  ),
  mileage: z.preprocess(
    (el) => toOptionalNumberZodHelper(el),
    z
      .number()
      .max(999_999_999_999, 'Пробег не может превышать 999 999 999 999')
      .nullable()
      .optional()
  ),
});

const serviceSchema = baseSchema.extend({
  type: z.literal(CardTypes.SERVICES),
  serviceType: z.enum(SERVICE_VALUES),
  experience: z.preprocess(
    (el) => toNumberZodHelper(el),
    z.number().min(0, 'Опыт работы обязателен').max(100, 'Опыт работы не может превышать 100 лет')
  ),
  cost: z.preprocess(
    (el) => toNumberZodHelper(el),
    z
      .number()
      .min(1, 'Стоимость обязательна')
      .max(999_999_999_999_999, 'Максимальная стоимость — 999 999 999 999 999')
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
