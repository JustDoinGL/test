import { Box, Typography, styled } from '@mui/material';
import { IAuto } from '../@types/CardDto';
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
  return (
    <StyledCard>
      <Box mt={2}>
        <Typography variant='h6'>Детали:</Typography>
        <Typography>Марка: {card.brand}</Typography>
        <Typography>Модель: {card.model}</Typography>
        <Typography>Год выпуска: {card.year}</Typography>
        <Typography>
          Пробег: <FormattedNumber value={card.mileage} /> км
        </Typography>
      </Box>
    </StyledCard>
  );
};
