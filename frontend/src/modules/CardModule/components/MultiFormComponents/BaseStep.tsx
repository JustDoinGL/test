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
        defaultValue=''
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            multiline
            defaultValue={null}
            label='Название'
            error={!!errors.name}
            helperText={errors.name?.message?.toString()}
          />
        )}
      />

      <Controller
        name='description'
        defaultValue=''
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            defaultValue={null}
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
        defaultValue=''
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            multiline
            defaultValue={null}
            label='Локация'
            error={!!errors.location}
            helperText={errors.location?.message?.toString()}
          />
        )}
      />

      <Controller
        name='photo'
        defaultValue=''
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            multiline
            defaultValue={null}
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
