import { PATHS } from '@/assets';
import { CardInformation } from '@/modules';
import { CustomError } from '@/ui';
import { Box } from '@mui/material';
import { useParams } from 'react-router';

export const ItemPage = () => {
  const { id } = useParams();

  if (!id) return <CustomError errorText='Что то пошло не так' />;

  return (
    <Box data-testid={PATHS.itemPage}>
      <CardInformation id={id} />
    </Box>
  );
};
