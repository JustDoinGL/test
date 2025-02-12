import { useFormContext, useWatch } from 'react-hook-form';
import { TextField, MenuItem, Box } from '@mui/material';

export const CategoryStep = () => {
  const { register, formState } = useFormContext();
  const { errors } = formState;
  const category = useWatch({ name: 'category' });

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {category === 'Недвижимость' && (
        <>
          <TextField
            select
            label='Тип недвижимости'
            {...register('propertyType')}
            error={!!errors.propertyType}
            // helperText={errors.propertyType?.message}
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
            // helperText={errors.area?.message}
          />
          <TextField
            label='Количество комнат'
            type='number'
            {...register('rooms', { valueAsNumber: true })}
            error={!!errors.rooms}
            // helperText={errors.rooms?.message}
          />
          <TextField
            label='Цена'
            type='number'
            {...register('price', { valueAsNumber: true })}
            error={!!errors.price}
            // helperText={errors.price?.message}
          />
        </>
      )}

      {category === 'Авто' && (
        <>
          <TextField
            select
            label='Марка'
            {...register('brand')}
            error={!!errors.brand}
            // helperText={errors.brand?.message}
          >
            <MenuItem value='Toyota'>Toyota</MenuItem>
            <MenuItem value='BMW'>BMW</MenuItem>
            <MenuItem value='Audi'>Audi</MenuItem>
          </TextField>
          <TextField
            label='Модель'
            {...register('model')}
            error={!!errors.model}
            // helperText={errors.model?.message}
          />
          <TextField
            label='Год выпуска'
            type='number'
            {...register('year', { valueAsNumber: true })}
            error={!!errors.year}
            // helperText={errors.year?.message}
          />
          <TextField
            label='Пробег (км)'
            type='number'
            {...register('mileage', { valueAsNumber: true })}
            error={!!errors.mileage}
            // helperText={errors.mileage?.message}
          />
        </>
      )}

      {category === 'Услуги' && (
        <>
          <TextField
            select
            label='Тип услуги'
            {...register('serviceType')}
            error={!!errors.serviceType}
            // helperText={errors.serviceType?.message}
          >
            <MenuItem value='Ремонт'>Ремонт</MenuItem>
            <MenuItem value='Уборка'>Уборка</MenuItem>
            <MenuItem value='Доставка'>Доставка</MenuItem>
          </TextField>
          <TextField
            label='Опыт работы (лет)'
            type='number'
            {...register('experience', { valueAsNumber: true })}
            error={!!errors.experience}
            // helperText={errors.experience?.message}
          />
          <TextField
            label='Стоимость'
            type='number'
            {...register('cost', { valueAsNumber: true })}
            error={!!errors.cost}
            // helperText={errors.cost?.message}
          />
          <TextField
            label='График работы'
            {...register('schedule')}
            error={!!errors.schedule}
            // helperText={errors.schedule?.message}
          />
        </>
      )}
    </Box>
  );
};
