import { useFormContext } from 'react-hook-form';
import { RealEstateSchema } from '../../../@types/cardSchema';
import { TextField, MenuItem } from '@mui/material';

export const RealEstateForm = () => {
  const { register, formState } = useFormContext<RealEstateSchema>();
  const { errors } = formState;

  return (
    <>
      <TextField
        select
        label='Тип недвижимости'
        {...register('propertyType')}
        error={!!errors.propertyType}
        helperText={errors.propertyType?.message?.toString()}
      >
        <MenuItem value='Квартира'>Квартира</MenuItem>
        <MenuItem value='Дом'>Дом</MenuItem>
        <MenuItem value='Коттедж'>Коттедж</MenuItem>
      </TextField>
      <TextField
        label='Площадь (кв. м)'
        type='number'
        {...register('area', { valueAsNumber: true })}
        error={!!errors.area}
        helperText={errors.area?.message?.toString()}
      />
      <TextField
        label='Количество комнат'
        type='number'
        {...register('rooms', { valueAsNumber: true })}
        error={!!errors.rooms}
        helperText={errors.rooms?.message?.toString()}
      />
      <TextField
        label='Цена'
        type='number'
        {...register('price', { valueAsNumber: true })}
        error={!!errors.price}
        helperText={errors.price?.message?.toString()}
      />
    </>
  );
};
