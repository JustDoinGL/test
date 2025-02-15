import { useCheckAuth } from '@/modules';
import { Navigate, Outlet } from 'react-router';

export const AuthProvider = () => {
  const { isSuccess } = useCheckAuth();

  if (isSuccess) {
    return <Navigate to='/' replace />;
  }

  return <Outlet />;
};
