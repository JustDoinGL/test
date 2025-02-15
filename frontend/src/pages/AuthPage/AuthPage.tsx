import { LoginForm } from '@/modules';
import { CustomBackButton } from '@/ui';
import { Box } from '@mui/material';

export const AuthPage = () => {
  return (
    <Box>
      <Box display='flex' justifyContent='space-between' mb='20px'>
        <CustomBackButton step={-2} />
      </Box>

      <LoginForm />
    </Box>
  );
};
