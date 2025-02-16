import { PATHS } from '@/assets';
import { CardsInfinityScroll, SearchCardInput, SearchCardForm } from '@/modules';
import { useScrollPosition } from '@/shared';
import { Box, useMediaQuery, useTheme } from '@mui/material';

export const ListPage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const containerRef = useScrollPosition('cards-scroll-position');

  return (
    <Box
      data-testid={PATHS.mainPage}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        padding: 0,
      }}
    >
      <SearchCardInput />

      <Box
        component='main'
        sx={{ display: 'flex', justifyContent: 'space-around', gap: '20px', p: 0 }}
      >
        <Box
          sx={{
            overflowY: 'auto',
            maxHeight: 'calc(100vh - 180px)',
            width: '100%',
            maxWidth: '500px',
          }}
          ref={containerRef}
        >
          <CardsInfinityScroll />
        </Box>

        {!isSmallScreen && <SearchCardForm />}
      </Box>
    </Box>
  );
};
