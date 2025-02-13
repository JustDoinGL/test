import { useFormContext } from 'react-hook-form';
import { RealEstateSchema } from '../../../types/cardSchema';
import { TextField } from '@mui/material';
import { CustomSelect } from '@/ui';
import { PROPERTY_TYPES } from '@/assets';

export const RealEstateForm = () => {
  const { register, formState, control } = useFormContext<RealEstateSchema>();
  const { errors } = formState;

  return (
    <>
      <CustomSelect
        control={control}
        errors={errors}
        label='Тип недвижимости'
        name='propertyType'
        options={PROPERTY_TYPES}
      />

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
