import { z } from 'zod';

export const authSchema = z.object({
  email: z.string().email('Введите валидную почту'),
  password: z.string().min(4, 'Пароль обязателен'),
});

export type AuthFormData = z.infer<typeof authSchema>;
