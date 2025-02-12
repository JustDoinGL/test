import { PATHS } from '@/assets';
import { CustomError } from '@/ui';
import { Box } from '@mui/material';
import { useParams } from 'react-router';
import { CardInformation } from 'src/modules/CardModule/CardInformation';

export const ItemPage = () => {
  const { id } = useParams();

  if (!id) return <CustomError errorText='Что то пошло не так' />;

  return (
    <Box data-testid={PATHS.itemPage}>
      <CardInformation id={id} />
    </Box>
  );
};
