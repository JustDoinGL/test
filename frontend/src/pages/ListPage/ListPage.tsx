import { PATHS } from '@/assets';
import { Container } from '@mui/material';
import CardModule from 'src/modules/CardModule/CardsInfinityScroll';

export const ListPage = () => {
  return (
    <Container
      data-testid={PATHS.mainPage}
      sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
    >
      <CardModule />
    </Container>
  );
};
