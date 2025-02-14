import { useState, useEffect } from 'react';
import { useDebounce } from '@/shared';
import { Box, TextField } from '@mui/material';
import { useCustomSearchParams } from './hooks';

export const SearchCardInput = () => {
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
    <Box margin='0 auto' width='100%' maxWidth='400px'>
      <TextField
        type='text'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        label='Поиск карточки'
        sx={{ width: '100%' }}
        fullWidth
      />
    </Box>
  );
};
