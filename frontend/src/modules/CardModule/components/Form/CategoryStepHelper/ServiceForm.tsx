import { useFormContext } from 'react-hook-form';
import { ServiceSchema } from '../../../@types/cardSchema';
import { TextField, MenuItem } from '@mui/material';

export const ServiceForm = () => {
  const { register, formState } = useFormContext<ServiceSchema>();
  const { errors } = formState;

  return (
    <>
      <TextField
        select
        label='Тип услуги'
        {...register('serviceType')}
        error={!!errors.serviceType}
        helperText={errors.serviceType?.message?.toString()}
      >
        <MenuItem value='Ремонт'>Ремонт</MenuItem>
        <MenuItem value='Уборка'>Уборка</MenuItem>
        <MenuItem value='Доставка'>Доставка</MenuItem>
      </TextField>
      <TextField
        label='Опыт работы (лет)'
        type='number'
        {...register('experience', { valueAsNumber: true })}
        error={!!errors.experience}
        helperText={errors.experience?.message?.toString()}
      />
      <TextField
        label='Стоимость'
        type='number'
        {...register('cost', { valueAsNumber: true })}
        error={!!errors.cost}
        helperText={errors.cost?.message?.toString()}
      />
      <TextField
        label='График работы'
        {...register('schedule')}
        error={!!errors.schedule}
        helperText={errors.schedule?.message?.toString()}
      />
    </>
  );
};
