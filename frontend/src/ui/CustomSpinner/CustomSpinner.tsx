import { CircularProgress, CircularProgressProps } from '@mui/material';

type CustomSpinnerProps = {
  size?: number;
  color?: CircularProgressProps['color'];
};

export const CustomSpinner = ({ size = 40, color = 'primary' }: CustomSpinnerProps) => {
  return <CircularProgress size={size} color={color} />;
};
