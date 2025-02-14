import { PATHS } from '@/assets';
import { CardsInfinityScroll, SearchCard } from '@/modules';
import { Container } from '@mui/material';
import { ZZZZZ } from 'src/modules/CardModule/SeacrchCardForm';

export const ListPage = () => {
  return (
    <Container
      data-testid={PATHS.mainPage}
      sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
    >
      <SearchCard />
      <ZZZZZ />
      <CardsInfinityScroll />
    </Container>
  );
};
