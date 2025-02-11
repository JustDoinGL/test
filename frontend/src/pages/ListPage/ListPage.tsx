import { PATHS } from '@/assets';
import { TextWithLinkButton } from '@/ui';
import { Box } from '@mui/material';

export const ListPage = () => {
  return (
    <Box data-testid={PATHS.mainPage} sx={{ margin: '0 auto', textAlign: 'center' }}>
      <TextWithLinkButton
        text='Вы можете создать новое объявление'
        buttonText='Создать объявление'
        buttonLink={PATHS.formPage}
      />
    </Box>
  );
};
