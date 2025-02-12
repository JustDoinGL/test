import { useFormContext } from 'react-hook-form';
import { TextField, MenuItem, Box } from '@mui/material';

export const BaseStep = () => {
  const { register, formState } = useFormContext();
  const { errors } = formState;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <TextField
        label='Название'
        {...register('name')}
        error={!!errors.name}
        // helperText={errors.name?.message}
      />
      <TextField
        label='Описание'
        {...register('description')}
        error={!!errors.description}
        // helperText={errors.description?.message}
      />
      <TextField
        label='Локация'
        {...register('location')}
        error={!!errors.location}
        // helperText={errors.location?.message}
      />
      <TextField
        label='Фото (URL)'
        {...register('photo')}
        error={!!errors.photo}
        // helperText={errors.photo?.message}
      />
      <TextField
        select
        label='Категория'
        {...register('category')}
        error={!!errors.category}
        // helperText={errors.category?.message}
      >
        <MenuItem value='Недвижимость'>Недвижимость</MenuItem>
        <MenuItem value='Авто'>Авто</MenuItem>
        <MenuItem value='Услуги'>Услуги</MenuItem>
      </TextField>
    </Box>
  );
};
