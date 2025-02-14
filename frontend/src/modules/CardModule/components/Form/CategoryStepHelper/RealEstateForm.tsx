import { Controller, useFormContext } from 'react-hook-form';
import { RealEstateSchema } from '../../../types/cardSchema';
import { TextField } from '@mui/material';
import { CustomSelect } from '@/ui';
import { PROPERTY_TYPES } from '@/assets';

export const RealEstateForm = () => {
  const { formState, control } = useFormContext<RealEstateSchema>();
  const { errors } = formState;

  return (
    <>
      <CustomSelect
        control={control}
        name='propertyType'
        errors={errors}
        label='Тип недвижимости'
        options={PROPERTY_TYPES}
      />

      <Controller
        name='area'
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label='Площадь (кв. м)'
            type='number'
            error={!!errors.area}
            helperText={errors.area?.message?.toString()}
          />
        )}
      />

      <Controller
        name='rooms'
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label='Количество комнат'
            type='number'
            error={!!errors.rooms}
            helperText={errors.rooms?.message?.toString()}
          />
        )}
      />

      <Controller
        name='price'
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label='Цена'
            type='number'
            error={!!errors.price}
            helperText={errors.price?.message?.toString()}
          />
        )}
      />
    </>
  );
};
