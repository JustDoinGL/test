import { useFormContext } from 'react-hook-form';
import { AutoSchema } from '../../../types/cardSchema';
import { TextField } from '@mui/material';
import { CustomSelect } from '@/ui';
import { CAR_BRANDS } from '@/assets';

export const AutoForm = () => {
  const { register, formState, control } = useFormContext<AutoSchema>();
  const { errors } = formState;

  return (
    <>
      <CustomSelect
        control={control}
        errors={errors}
        label='Марка'
        name='brand'
        options={CAR_BRANDS}
      />

      <TextField
        label='Модель'
        {...register('model')}
        error={!!errors.model}
        helperText={errors.model?.message?.toString()}
      />

      <TextField
        label='Год выпуска'
        type='number'
        {...register('year', { valueAsNumber: true })}
        error={!!errors.year}
        helperText={errors.year?.message?.toString()}
      />

      <TextField
        label='Пробег (км)'
        type='number'
        {...register('mileage', { valueAsNumber: true })}
        error={!!errors.mileage}
        helperText={errors.mileage?.message?.toString()}
      />
    </>
  );
};
