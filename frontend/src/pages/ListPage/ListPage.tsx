import { PATHS } from '@/assets';
import { CardsInfinityScroll, SearchCardInput, SearchCardForm } from '@/modules';
import { Box, Container, useMediaQuery, useTheme } from '@mui/material';

export const ListPage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container
      data-testid={PATHS.mainPage}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <SearchCardInput />

      <Box component='main' sx={{ display: 'flex', justifyContent: 'space-around', gap: '20px' }}>
        <Box sx={{ overflow: 'scroll', maxHeight: 'calc(100vh - 180px)' }}>
          <CardsInfinityScroll />
        </Box>

        {!isSmallScreen && <SearchCardForm />}
      </Box>
    </Container>
  );
};
