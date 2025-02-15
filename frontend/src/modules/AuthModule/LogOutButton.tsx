import { Button, Box } from '@mui/material';
import { useNavigate } from 'react-router';
import { PATHS } from '@/assets';
import { useLogOut } from './hooks/useLogOut';

export const LogOutButton = () => {
  const navigate = useNavigate();
  const { mutate } = useLogOut();

  const handleLogout = () => {
    mutate();
    navigate(PATHS.mainPage);
  };

  return (
    <Box textAlign='center'>
      <Button variant='contained' color='secondary' onClick={handleLogout}>
        Выйти
      </Button>
    </Box>
  );
};
