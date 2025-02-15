import { Navigate, Outlet } from 'react-router';
import { useCheckAuth } from 'src/modules/AuthModule';

export const AuthProvider = () => {
  const { isSuccess } = useCheckAuth();

  if (isSuccess) {
    return <Navigate to='/' replace />;
  }

  return <Outlet />;
};
