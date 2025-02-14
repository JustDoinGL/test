export const CardTypes = {
  REAL_ESTATE: 'Недвижимость',
  AUTO: 'Авто',
  SERVICES: 'Услуги',
} as const;

export const CardTypesArr = [
  { label: CardTypes.REAL_ESTATE, value: CardTypes.REAL_ESTATE },
  { label: CardTypes.AUTO, value: CardTypes.AUTO },
  { label: CardTypes.SERVICES, value: CardTypes.SERVICES },
];
