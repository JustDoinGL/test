import { PATHS } from '@/assets';
import { TextWithLinkButton } from '@/ui';
import { Container } from '@mui/material';
import CardModule from 'src/modules/CardModule/CardsInfinityScroll';

export const ListPage = () => {
  return (
    <Container
      data-testid={PATHS.mainPage}
      sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
    >
      <TextWithLinkButton
        text='Вы можете создать новое объявление'
        buttonText='Создать объявление'
        buttonLink={PATHS.formPage}
      />

      <CardModule />
    </Container>
  );
};
