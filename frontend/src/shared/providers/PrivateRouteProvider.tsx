import { PATHS } from '@/assets';
import { useCheckAuth } from '@/modules';
import { CustomSpinner } from '@/ui';
import { Box } from '@mui/material';
import { Navigate, Outlet } from 'react-router';

export const PrivateRouteProvider = () => {
  const { isLoading, isSuccess, isError } = useCheckAuth();

  if (isLoading) {
    return (
      <Box sx={{ height: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <CustomSpinner size={100} />
      </Box>
    );
  }

  if (isError || !isSuccess) {
    return <Navigate to={PATHS.auth} replace />;
  }

  return <Outlet />;
};
