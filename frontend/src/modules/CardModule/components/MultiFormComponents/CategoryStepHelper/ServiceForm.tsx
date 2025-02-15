import { Controller, useFormContext } from 'react-hook-form';
import { ServiceSchema } from '../../../types/cardSchema';
import { TextField } from '@mui/material';
import { SERVICE_TYPES } from '@/assets';
import { CustomSelect } from '@/ui';

export const ServiceForm = ({ isRequiredRows = true }: { isRequiredRows?: boolean }) => {
  const { formState, control } = useFormContext<ServiceSchema>();
  const { errors } = formState;

  return (
    <>
      <CustomSelect
        name='serviceType'
        control={control}
        errors={errors}
        label='Тип услуги'
        options={SERVICE_TYPES}
      />

      <Controller
        name='experience'
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label='Опыт работы (лет)'
            type='number'
            error={!!errors.experience}
            helperText={errors.experience?.message?.toString()}
          />
        )}
      />

      <Controller
        name='cost'
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label='Стоимость'
            type='number'
            error={!!errors.cost}
            helperText={errors.cost?.message?.toString()}
          />
        )}
      />

      {isRequiredRows && (
        <Controller
          name='schedule'
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label='График работы не обязательное поле'
              error={!!errors.schedule}
              helperText={errors.schedule?.message?.toString()}
            />
          )}
        />
      )}
    </>
  );
};
