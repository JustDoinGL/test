import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Box } from '@mui/material';
import { CardUpdateFirst } from '../../types/cardSchema';
import { CustomSelect } from '@/ui';
import { CardTypesArr } from '@/assets';

export const BaseStep = () => {
  const { control, formState } = useFormContext<CardUpdateFirst>();
  const { errors } = formState;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Controller
        name='name'
        control={control}
        defaultValue=''
        render={({ field }) => (
          <TextField
            {...field}
            multiline
            label='Название'
            error={!!errors.name}
            helperText={errors.name?.message?.toString()}
          />
        )}
      />

      <Controller
        name='description'
        control={control}
        defaultValue=''
        render={({ field }) => (
          <TextField
            {...field}
            multiline
            label='Описание'
            minRows={3}
            error={!!errors.description}
            helperText={errors.description?.message?.toString()}
          />
        )}
      />

      <Controller
        name='location'
        control={control}
        defaultValue=''
        render={({ field }) => (
          <TextField
            {...field}
            multiline
            label='Локация'
            error={!!errors.location}
            helperText={errors.location?.message?.toString()}
          />
        )}
      />

      <Controller
        name='photo'
        control={control}
        defaultValue=''
        render={({ field }) => (
          <TextField
            {...field}
            multiline
            label='Фото (URL) необязательное поле'
            error={!!errors.photo}
            helperText={errors.photo?.message?.toString()}
          />
        )}
      />

      <CustomSelect
        control={control}
        errors={errors}
        label='Категория'
        name='type'
        options={CardTypesArr}
      />
    </Box>
  );
};
