import { Box, Typography, styled } from '@mui/material';
import { IAuto } from '../../types/cardDto';
import { FormattedNumber } from '@/ui';

const StyledCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
  maxWidth: '600px',
  margin: '0 auto',
}));

export const AutoCard = ({ card }: { card: IAuto }) => {
  const { year, model, brand, mileage } = card;
  return (
    <StyledCard>
      <Box mt={2}>
        <Typography variant='h6'>Детали:</Typography>
        <Typography>Марка: {brand}</Typography>
        <Typography>Модель: {model}</Typography>
        <Typography>Год выпуска: {year}</Typography>
        <Typography>
          Пробег: {mileage ? `${(<FormattedNumber value={mileage} />)} км` : 'Не указан'}
        </Typography>
      </Box>
    </StyledCard>
  );
};
