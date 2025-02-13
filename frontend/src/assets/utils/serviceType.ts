export const SERVICE_TYPES = [
  { value: 'repair', label: 'Ремонт' },
  { value: 'cleaning', label: 'Уборка' },
  { value: 'delivery', label: 'Доставка' },
  { value: 'tutoring', label: 'Репетиторство' },
  { value: 'babysitting', label: 'Няня' },
  { value: 'consulting', label: 'Консультация' },
  { value: 'event', label: 'Организация мероприятий' },
  { value: 'it', label: 'IT-услуги' },
  { value: 'design', label: 'Дизайн' },
];

export const SERVICE_VALUES = [
  'repair',
  'cleaning',
  'delivery',
  'tutoring',
  'babysitting',
  'consulting ',
  'event',
  'it',
  'design',
] as const;
