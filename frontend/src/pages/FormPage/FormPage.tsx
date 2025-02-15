import { PATHS } from '@/assets';
import { CardForm, LogOutButton } from '@/modules';
import { CustomBackButton } from '@/ui';
import { Box } from '@mui/material';

export const FormPage = () => {
  return (
    <Box data-testid={PATHS.formPage}>
      <Box display='flex' justifyContent='space-between' mb='20px'>
        <CustomBackButton />
        <LogOutButton />
      </Box>

      <CardForm />
    </Box>
  );
};
