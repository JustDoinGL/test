import { CardTypes } from '@/assets';
import { CustomError, CustomImage, CustomNotFound } from '@/ui';
import { Box, styled, Typography } from '@mui/material';
import { useGetList } from './hooks/useCard';
import { AutoCard, RealEstateCard, ServiceCard } from './components';

const Container = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.default,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '5px',
}));

export const CardInformation = ({ id }: { id: string }) => {
  const { error, isLoading, card } = useGetList(id);

  if (error) return <CustomNotFound />;

  if (isLoading) return <div>Loading...</div>;

  if (!card) return <CustomError errorType='info' errorText='Информация по карточке отсуствует' />;

  return (
    <Container>
      <CustomImage src={card.photo} alt={card.name} width='400px' sx={{ maxWidth: '90%' }} />
      <Typography variant='h4' gutterBottom>
        {card.name}
      </Typography>
      <Typography variant='body1' gutterBottom>
        {card.description}
      </Typography>
      <Typography variant='body2' color='text.secondary'>
        📍 {card.location}
      </Typography>

      {card.type === CardTypes.REAL_ESTATE && <RealEstateCard card={card} />}
      {card.type === CardTypes.AUTO && <AutoCard card={card} />}
      {card.type === CardTypes.SERVICES && <ServiceCard card={card} />}
    </Container>
  );
};
