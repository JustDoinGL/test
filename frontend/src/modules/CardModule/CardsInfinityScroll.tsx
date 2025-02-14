import { useInterSection } from '@/shared';
import { CardComponent } from './components/BaseCard';
import { CustomError, CustomSpinner } from '@/ui';
import { Box } from '@mui/material';
import { useCardList } from './hooks';

export const CardsInfinityScroll = () => {
  const { error, isLoading, cardItems, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useCardList();
  const cursorRef = useInterSection(() => fetchNextPage());

  if (error) return <CustomError errorText={String(error)} />;

  if (isLoading) return <Box>error</Box>;

  return (
    <Box sx={{ margin: '0 auto' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', mb: '20px' }}>
        {cardItems?.map((card) => <CardComponent card={card} key={card.id} />)}
      </Box>

      <Box
        ref={cursorRef}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: '20px' }}
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
