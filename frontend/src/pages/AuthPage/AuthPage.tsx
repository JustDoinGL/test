import { PATHS } from '@/assets';
import { LoginForm } from '@/modules';
import { CustomBackButton } from '@/ui';
import { Box } from '@mui/material';

export const AuthPage = () => {
  return (
    <Box data-testid={PATHS.auth}>
      <Box display='flex' justifyContent='space-between' mb='20px'>
        <CustomBackButton step={-2} />
      </Box>

      <LoginForm />
    </Box>
  );
};
