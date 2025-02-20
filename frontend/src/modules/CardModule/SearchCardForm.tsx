import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CardTypesArr } from '@/assets';
import { useCustomSearchParams } from './hooks';
import { Button, styled, Typography } from '@mui/material';
import { CustomSelect } from '@/ui';
import { SearchFormValues, searchSchema } from './types/searchSchema';
import { CategoryStep } from './components/MultiFormComponents';

const StyledForm = styled('form')(() => ({
  maxWidth: '400px',
  width: '100%',
  maxHeight: '600px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  margin: '0 auto',
  padding: '20px',
  border: '5px solid white',
  borderRadius: '15px',
  background: 'rgb(11, 20, 31)',
}));

export const SearchCardForm = ({ setIsOpenModal }: { setIsOpenModal?: () => void }) => {
  const { setSearchParams, searchParams, resetParams } = useCustomSearchParams();

  const methods = useForm<SearchFormValues>({
    resolver: zodResolver(searchSchema),
    defaultValues: {},
    values: searchParams,
  });
  const { control, formState, handleSubmit } = methods;
  const { errors } = formState;

  const onSubmit = (data: SearchFormValues) => {
    setSearchParams(data);

    if (setIsOpenModal) {
      setIsOpenModal();
    }
  };

  const resetForm = () => {
    resetParams();

    if (setIsOpenModal) {
      setIsOpenModal();
    }
  };

  return (
    <FormProvider {...methods}>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Typography variant='h5'>Дополнительные фильтры</Typography>

        <CustomSelect
          control={control}
          errors={errors}
          label='Категория'
          name='type'
          options={CardTypesArr}
        />

        <CategoryStep isRequiredRows={false} />

        <Button type='submit' variant='contained'>
          Применить фильтры
        </Button>
        <Button onClick={resetForm} variant='contained'>
          Сбросить фильтры
        </Button>
      </StyledForm>
    </FormProvider>
  );
};
