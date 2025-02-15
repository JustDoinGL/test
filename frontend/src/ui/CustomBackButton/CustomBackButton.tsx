import { useNavigate } from 'react-router';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';

interface CustomBackButtonProps {
  label?: string;
  step?: number;
}

export const CustomBackButton = ({ label = 'Назад', step = -1 }: CustomBackButtonProps) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(step);
  };

  return (
    <Button
      onClick={handleBack}
      startIcon={<ArrowBackIcon />}
      variant='contained'
      color='primary'
      sx={{ ml: '20px' }}
    >
      {label}
    </Button>
  );
};
