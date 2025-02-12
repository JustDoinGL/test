import { Button, Card, CardContent, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import { CustomImage, CustomTextEllipsis } from '@/ui';
import { Link } from 'react-router';
import { PATHS } from '@/assets';
import { CardDto } from '../types/cardDto';

const StyledCard = styled(Card)(({ theme }) => ({
  margin: '0 10px',
  padding: '10px',
  borderRadius: 12,
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.2s, box-shadow 0.2s',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
    outline: '1px solid white',
  },
  [theme.breakpoints.up('sm')]: {},
  [theme.breakpoints.up('md')]: {
    minWidth: '400px',
    maxWidth: '400px',
  },
  [theme.breakpoints.up('lg')]: {
    minWidth: '500px',
    maxWidth: '500px',
  },
}));

export const CardComponent = ({ card }: { card: CardDto }) => {
  const { name, description, location, photo, type, id } = card;

  return (
    <Link to={`${PATHS.itemPage}/${id}`}>
      <StyledCard>
        <CustomImage src={photo} />
        <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <CustomTextEllipsis text={name} component='h4' lines={2} sx={{ fontSize: '20px' }} />

          <CustomTextEllipsis
            predText='Тип объявления - '
            text={type}
            component='h5'
            lines={2}
            sx={{ fontSize: '15px' }}
          />

          <CustomTextEllipsis
            predText='Локация - '
            text={`📍 ${location}`}
            component='h5'
            lines={2}
          />

          <Box>
            <Typography component='h6'>Описание:</Typography>
            <CustomTextEllipsis
              text={description}
              component='p'
              lines={4}
              sx={{ fontSize: '15px' }}
            />
          </Box>
        </CardContent>

        <Button variant='contained'>Откртыть объявление</Button>
      </StyledCard>
    </Link>
  );
};
