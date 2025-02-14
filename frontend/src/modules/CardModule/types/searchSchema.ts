import { CAR_VALUES, CardTypes, PROPERTY_VALUES, SERVICE_VALUES } from '@/assets';
import { z } from 'zod';

export const searchSchema = z.object({
  type: z.enum([CardTypes.SERVICES, CardTypes.AUTO, CardTypes.REAL_ESTATE]).optional(),
  serviceType: z.enum(SERVICE_VALUES).optional(),
  experience: z.number().optional(),
  cost: z.number().optional(),
  brand: z.enum(CAR_VALUES).optional(),
  model: z.string().optional(),
  year: z.number().optional(),
  propertyType: z.enum(PROPERTY_VALUES).optional(),
  area: z.number().optional(),
  rooms: z.number().optional(),
  price: z.number().optional(),
});

export type SearchFormValues = z.infer<typeof searchSchema>;
