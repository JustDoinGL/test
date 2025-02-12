import { Box, Typography, styled } from '@mui/material';
import { IRealEstate } from '../@types/CardDto';
import { FormattedNumber } from '@/ui';

const StyledCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
  maxWidth: '600px',
  margin: '0 auto',
}));

export const RealEstateCard = ({ card }: { card: IRealEstate }) => {
  return (
    <StyledCard>
      <Box mt={2}>
        <Typography variant='h6'>Детали:</Typography>
        <Typography>Тип недвижимости: {card.propertyType}</Typography>
        <Typography>Площадь: {card.area} кв. м</Typography>
        <Typography>Комнат: {card.rooms}</Typography>
        <Typography>
          Цена: <FormattedNumber value={card.price} /> ₽
        </Typography>
      </Box>
    </StyledCard>
  );
};
