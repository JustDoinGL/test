import { useFormContext } from 'react-hook-form';
import { ServiceSchema } from '../../../types/cardSchema';
import { TextField } from '@mui/material';
import { SERVICE_TYPES } from '@/assets';
import { CustomSelect } from '@/ui';

export const ServiceForm = () => {
  const { register, formState, control } = useFormContext<ServiceSchema>();
  const { errors } = formState;

  return (
    <>
      <CustomSelect
        control={control}
        errors={errors}
        label='Тип услуги'
        name='serviceType'
        options={SERVICE_TYPES}
      />

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
        label='График работы не обязательное поле'
        {...register('schedule')}
        error={!!errors.schedule}
        helperText={errors.schedule?.message?.toString()}
      />
    </>
  );
};
