/**
 * Преобразует значение в число. Если значение не является числом, возвращает 0.
 */

export const toNumberZodHelper = (val: unknown) => {
  const num = Number(val);
  return isNaN(num) ? 0 : num;
};

/**
 * Преобразует значение в число. Если значение не является числом, возвращает undefined или null.
 */
export const toOptionalNumberZodHelper = (val: unknown): number | undefined | null => {
  // Если значение null или undefined, возвращаем как есть
  if (val === null) return null;
  if (val === undefined) return undefined;

  // Если значение уже число, возвращаем его
  if (typeof val === 'number') {
    return isNaN(val) ? undefined : val;
  }

  // Пытаемся преобразовать значение в число
  const num = Number(val);
  return isNaN(num) ? null : num;
};
