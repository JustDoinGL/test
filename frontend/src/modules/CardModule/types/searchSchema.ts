import {
  CAR_VALUES,
  CardTypes,
  PROPERTY_VALUES,
  SERVICE_VALUES,
  toOptionalNumberZodHelper,
} from '@/assets';
import { z } from 'zod';

export const searchSchema = z.object({
  type: z.enum([CardTypes.SERVICES, CardTypes.AUTO, CardTypes.REAL_ESTATE]),
  serviceType: z.enum(SERVICE_VALUES).optional(),
  brand: z.enum(CAR_VALUES).optional(),
  propertyType: z.enum(PROPERTY_VALUES).optional(),
  experience: z.preprocess(
    (el) => toOptionalNumberZodHelper(el),
    z.number().max(100, 'Максимальная опыт 100').optional()
  ),
  cost: z.preprocess(
    (el) => toOptionalNumberZodHelper(el),
    z.number().max(999_999_999_999_999, 'Максимальная стоимость 999 999 999 999 999').optional()
  ),
  area: z.preprocess(
    (el) => toOptionalNumberZodHelper(el),
    z.number().max(10_000, 'Максимальная площадь - 10 000').optional()
  ),
  rooms: z.preprocess(
    (el) => toOptionalNumberZodHelper(el),
    z.number().max(100, 'Максимальное количество комнат 100').optional()
  ),
  price: z.preprocess(
    (el) => toOptionalNumberZodHelper(el),
    z.number().max(999_999_999_999, 'Максимальное стоимость 999 999 999 999').optional()
  ),
  model: z.string().max(100, 'Слишком длинное название').optional(),
  year: z.preprocess(
    (el) => toOptionalNumberZodHelper(el),
    z.number().max(Number(new Date().getFullYear()), 'Этот год еще не наступил').optional()
  ),
});

export type SearchFormValues = z.infer<typeof searchSchema>;
