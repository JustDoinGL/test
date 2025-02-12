import { useNavigate } from 'react-router';
import { Box, Button, Typography } from '@mui/material';

export const CustomNotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      textAlign='center'
      p={2}
    >
      <Typography variant='h4' gutterBottom>
        Такой элемент не найден
      </Typography>
      <Typography variant='body1' color='textSecondary' gutterBottom>
        Проверьте правильность ссылки или вернитесь назад.
      </Typography>
      <Button variant='contained' color='primary' onClick={handleGoBack}>
        Вернуться назад
      </Button>
    </Box>
  );
};
