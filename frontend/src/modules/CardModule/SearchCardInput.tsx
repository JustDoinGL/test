import { useState, useEffect } from 'react';
import { useDebounce } from '@/shared';
import { Box, Button, TextField, useMediaQuery, useTheme } from '@mui/material';
import { useCustomSearchParams } from './hooks';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { CustomModal } from '@/ui';
import { SearchCardForm } from './SearchCardForm';

export const SearchCardInput = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { searchParams, setSearchParams } = useCustomSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.q || '');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setSearchParams({ q: debouncedSearchTerm });
    } else {
      setSearchParams({ q: undefined });
    }
  }, [debouncedSearchTerm, setSearchParams]);

  return (
    <>
      <Box margin='0 auto' width='100%' display='flex' justifyContent='center' mx='5px'>
        <TextField
          type='text'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          label='Поиск карточки'
          sx={{ width: '100%', maxWidth: '300px' }}
          fullWidth
        />

        {isSmallScreen && (
          <Button variant='text' onClick={() => setIsOpenModal(true)}>
            <DensityMediumIcon />
          </Button>
        )}
      </Box>

      <CustomModal onClose={() => setIsOpenModal(false)} open={isOpenModal}>
        <SearchCardForm setIsOpenModal={() => setIsOpenModal(false)} />
      </CustomModal>
    </>
  );
};
