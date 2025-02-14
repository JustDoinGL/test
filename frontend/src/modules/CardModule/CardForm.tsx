import { Link, useSearchParams } from 'react-router';
import { MultiStepForm } from './components/BaseMultiForm';
import { CustomError, CustomSpinner } from '@/ui';
import { Box, Button } from '@mui/material';
import { PATHS } from '@/assets';
import { useGetCard } from './hooks';

export const CardForm = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const isValidId = id && !isNaN(Number(id));

  const { error, isLoading, card } = useGetCard(id, isValidId);

  if (isLoading) {
    return (
      <Box sx={{ minHeight: '100%' }}>
        <CustomSpinner size={100} />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <CustomError
          errorType='info'
          errorText='Такое объявление не найдено, Вы можете создать объявление'
        />
        <Button component={Link} to={PATHS.formPage} variant='contained'>
          Создайте объявление
        </Button>
      </Box>
    );
  }

  return <MultiStepForm defaultValues={card} isEditing={!!isValidId} />;
};
