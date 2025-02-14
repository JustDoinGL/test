import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CardTypesArr } from '@/assets';
import { useCustomSearchParams } from './hooks';
import { Box, Button } from '@mui/material';
import { CustomSelect } from '@/ui';
import { SearchFormValues, searchSchema } from './types/searchSchema';

export const ZZZZZ = () => {
  const { setSearchParams } = useCustomSearchParams();

  const methods = useForm<SearchFormValues>({
    resolver: zodResolver(searchSchema),
    defaultValues: {},
    // values: searchParams,
  });

  const { control, formState, handleSubmit } = methods;
  const { errors } = formState;

  const onSubmit = (data: SearchFormValues) => {
    console.log(data);
    setSearchParams(data);
  };

  return (
    <FormProvider {...methods}>
      <Box onSubmit={handleSubmit(onSubmit)} component='form'>
        <CustomSelect
          control={control}
          errors={errors}
          label='Категория'
          name='type'
          options={CardTypesArr}
        />

        {/* {true === 'SERVICES' && (
        <>
          <Controller
            name='serviceType'
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={SERVICE_VALUES.map((value) => ({
                  value,
                  label: value,
                }))}
                placeholder='Тип услуги'
                error={errors.serviceType?.message}
              />
            )}
          />
          <Controller
            name='experience'
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                type='number'
                placeholder='Опыт (лет)'
                error={errors.experience?.message}
              />
            )}
          />
          <Controller
            name='cost'
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                type='number'
                placeholder='Стоимость'
                error={errors.cost?.message}
              />
            )}
          />
        </>
      )}

      {true === 'AUTO' && (
        <>
          <Controller
            name='brand'
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={CAR_VALUES.map((value) => ({
                  value,
                  label: value,
                }))}
                placeholder='Марка'
                error={errors.brand?.message}
              />
            )}
          />
          <Controller
            name='model'
            control={control}
            render={({ field }) => (
              <TextField {...field} placeholder='Модель' error={errors.model?.message} />
            )}
          />
          <Controller
            name='year'
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                type='number'
                placeholder='Год выпуска'
                error={errors.year?.message}
              />
            )}
          />
        </>
      )}

     
      {true === 'REAL_ESTATE' && (
        <>
          <Controller
            name='propertyType'
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={PROPERTY_VALUES.map((value) => ({
                  value,
                  label: value,
                }))}
                placeholder='Тип недвижимости'
                error={errors.propertyType?.message}
              />
            )}
          />
          <Controller
            name='area'
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                type='number'
                placeholder='Площадь (м²)'
                error={errors.area?.message}
              />
            )}
          />
          <Controller
            name='rooms'
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                type='number'
                placeholder='Количество комнат'
                error={errors.rooms?.message}
              />
            )}
          />
          <Controller
            name='price'
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                type='number'
                placeholder='Цена'
                error={errors.price?.message}
              />
            )}
          />
        </>
      )} */}

        {/* Кнопка отправки формы */}
        <Button type='submit'>Применить фильтры</Button>
      </Box>
    </FormProvider>
  );
};
