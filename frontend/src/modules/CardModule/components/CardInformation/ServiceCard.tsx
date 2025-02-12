import { Box, Typography, styled } from '@mui/material';
import { IService } from '../../@types/cardDto';
import { FormattedNumber } from '@/ui';

const StyledCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
  maxWidth: '600px',
  margin: '0 auto',
}));

export const ServiceCard = ({ card }: { card: IService }) => {
  return (
    <StyledCard>
      <Box mt={2}>
        <Typography variant='h6'>Детали:</Typography>
        <Typography>Тип услуги: {card.serviceType}</Typography>
        <Typography>Опыт работы: {card.experience} лет</Typography>
        <Typography>
          Стоимость: <FormattedNumber value={card.cost} /> ₽
        </Typography>
        {card.schedule && <Typography>График: {card.schedule}</Typography>}
      </Box>
    </StyledCard>
  );
};
