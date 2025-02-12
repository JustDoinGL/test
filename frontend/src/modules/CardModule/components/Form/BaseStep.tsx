import { useFormContext } from 'react-hook-form';
import { TextField, MenuItem, Box } from '@mui/material';
import { CardUpdateFirst } from '../../types/cardSchema';

export const BaseStep = () => {
  const { register, formState } = useFormContext<CardUpdateFirst>();
  const { errors } = formState;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <TextField
        label='Название'
        {...register('name')}
        error={!!errors.name}
        helperText={errors.description?.message?.toString()}
      />

      <TextField
        label='Описание'
        {...register('description')}
        error={!!errors.description}
        helperText={errors.description?.message?.toString()}
      />
      <TextField
        label='Локация'
        {...register('location')}
        error={!!errors.location}
        helperText={errors.location?.message?.toString()}
      />
      <TextField
        label='Фото (URL) необязательное поле'
        {...register('photo')}
        error={!!errors.photo}
        helperText={errors.photo?.message?.toString()}
      />
      <TextField
        select
        label='Категория'
        {...register('type')}
        error={!!errors.type}
        helperText={errors.type?.message?.toString()}
      >
        <MenuItem value='Недвижимость'>Недвижимость</MenuItem>
        <MenuItem value='Авто'>Авто</MenuItem>
        <MenuItem value='Услуги'>Услуги</MenuItem>
      </TextField>
    </Box>
  );
};
