import { useFormContext } from 'react-hook-form';
import { TextField, Box } from '@mui/material';
import { CardUpdateFirst } from '../../types/cardSchema';
import { CustomSelect } from '@/ui';
import { typesArr } from '@/assets';

export const BaseStep = () => {
  const { register, formState, control } = useFormContext<CardUpdateFirst>();
  const { errors } = formState;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <TextField
        multiline
        label='Название'
        {...register('name')}
        error={!!errors.name}
        helperText={errors.name?.message?.toString()}
      />

      <TextField
        multiline
        label='Описание'
        minRows={3}
        {...register('description')}
        error={!!errors.description}
        helperText={errors.description?.message?.toString()}
      />

      <TextField
        multiline
        label='Локация'
        {...register('location')}
        error={!!errors.location}
        helperText={errors.location?.message?.toString()}
      />

      <TextField
        multiline
        label='Фото (URL) необязательное поле'
        {...register('photo')}
        error={!!errors.photo}
        helperText={errors.photo?.message?.toString()}
      />

      <CustomSelect
        control={control}
        errors={errors}
        label='Категория'
        name='type'
        options={typesArr}
      />
    </Box>
  );
};
