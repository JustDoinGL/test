import { PATHS } from '@/assets';
import { CardForm } from '@/modules';
import { CustomBackButton } from '@/ui';
import { Box } from '@mui/material';

export const FormPage = () => {
  return (
    <Box data-testid={PATHS.formPage}>
      <Box display='flex' mb='20px'>
        <CustomBackButton />
      </Box>

      <CardForm />
    </Box>
  );
};
