import { useNavigate } from 'react-router';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';

interface CustomBackButtonProps {
  label?: string;
}

export const CustomBackButton = ({ label = 'Назад' }: CustomBackButtonProps) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Button onClick={handleBack} startIcon={<ArrowBackIcon />} variant='contained' color='primary'>
      {label}
    </Button>
  );
};
