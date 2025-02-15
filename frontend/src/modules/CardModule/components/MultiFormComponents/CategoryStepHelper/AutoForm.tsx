import { Controller, useFormContext } from 'react-hook-form';
import { AutoSchema } from '../../../types/cardSchema';
import { TextField } from '@mui/material';
import { CustomSelect } from '@/ui';
import { CAR_BRANDS } from '@/assets';

export const AutoForm = ({ isRequiredRows = true }: { isRequiredRows?: boolean }) => {
  const { formState, control } = useFormContext<AutoSchema>();
  const { errors } = formState;

  return (
    <>
      <CustomSelect
        control={control}
        name='brand'
        errors={errors}
        label='Марка'
        options={CAR_BRANDS}
      />

      <Controller
        name='model'
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label='Модель'
            error={!!errors.model}
            helperText={errors.model?.message?.toString()}
          />
        )}
      />

      <Controller
        name='year'
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label='Год выпуска'
            type='number'
            error={!!errors.year}
            helperText={errors.year?.message?.toString()}
          />
        )}
      />

      {isRequiredRows && (
        <Controller
          name='mileage'
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label='Пробег (км) не обязательное поле'
              type='number'
              error={!!errors.mileage}
              helperText={errors.mileage?.message?.toString()}
            />
          )}
        />
      )}
    </>
  );
};
