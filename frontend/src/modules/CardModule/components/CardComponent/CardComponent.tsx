import { Card, CardContent, CardMedia, Typography, Box, Chip } from '@mui/material';
import { styled } from '@mui/system';
import { CardDto } from '../../@types/CardDto';

const StyledCard = styled(Card)(() => ({
  maxWidth: '400px',
  margin: '0 10px',
  borderRadius: 12,
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.2s, box-shadow 0.2s',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
    outline: '1px solid white',
  },
}));

const CategoryChip = styled(Chip)(({ theme }) => ({
  position: 'absolute',
  top: 16,
  right: 16,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  fontWeight: 'bold',
}));

export const CardComponent = ({ card }: { card: CardDto }) => {
  const { name, description, location, photo, type } = card;

  return (
    <StyledCard sx={{ height: '300px' }}>
      {photo && (
        <CardMedia
          component='img'
          height='200'
          image={photo}
          alt={name}
          sx={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
        />
      )}

      <CategoryChip label={type} />

      <CardContent>
        <Typography variant='h6' component='div' sx={{ fontWeight: 'bold', mb: 1 }}>
          {name}
        </Typography>
        <Typography variant='body2' color='text.secondary' sx={{ mb: 2 }}>
          {description}
        </Typography>
        <Box display='flex' alignItems='center'>
          <Typography variant='body2' color='text.secondary'>
            📍 {location}
          </Typography>
        </Box>
      </CardContent>
    </StyledCard>
  );
};
