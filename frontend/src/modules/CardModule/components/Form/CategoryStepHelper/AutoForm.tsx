import { useFormContext } from 'react-hook-form';
import { AutoSchema } from '../../../types/cardSchema';
import { TextField, MenuItem } from '@mui/material';

export const AutoForm = () => {
  const { register, formState } = useFormContext<AutoSchema>();
  const { errors } = formState;

  return (
    <>
      <TextField
        select
        label='Марка'
        {...register('brand')}
        error={!!errors.brand}
        helperText={errors.brand?.message?.toString()}
      >
        <MenuItem value='Toyota'>Toyota</MenuItem>
        <MenuItem value='BMW'>BMW</MenuItem>
        <MenuItem value='Audi'>Audi</MenuItem>
      </TextField>
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
