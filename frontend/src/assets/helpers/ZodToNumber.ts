/**
 * Преобразует значение в число. Если значение не является числом, возвращает 0.
 */

export const toNumberZodHelper = (val: unknown) => {
  const num = Number(val);
  return isNaN(num) ? 0 : num;
};
