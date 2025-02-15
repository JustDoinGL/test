import { useInterSection } from '@/shared';
import { CardComponent } from './components/BaseCard';
import { CustomError, CustomSpinner } from '@/ui';
import { Box, Skeleton } from '@mui/material';
import { useCardList } from './hooks';

export const CardsInfinityScroll = () => {
  const { error, isLoading, cardItems, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useCardList();
  const cursorRef = useInterSection(() => fetchNextPage());

  if (error) return <CustomError errorText={String(error)} />;

  if (isLoading) {
    return Array.from({ length: 5 }, (_, index) => (
      <Skeleton key={index} variant='rounded' width={500} height={470} sx={{ mb: '20px' }} />
    ));
  }

  return (
    <Box sx={{ margin: '10px auto' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', mb: '20px' }}>
        {cardItems?.map((card) => <CardComponent card={card} key={card.id} />)}
      </Box>

      <Box
        ref={cursorRef}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: '20px',
          width: '100%',
        }}
      >
        {!hasNextPage && (
          <CustomError
            errorType='info'
            errorText={cardItems ? 'Карточки закончились' : 'Карточек нету'}
          />
        )}
        {isFetchingNextPage && <CustomSpinner />}
      </Box>
    </Box>
  );
};
