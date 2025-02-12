import { SxProps, Theme, Typography } from '@mui/material';

interface FormattedNumberProps {
  value: number;
  sx?: SxProps<Theme>;
}

export const FormattedNumber: React.FC<FormattedNumberProps> = ({ value, sx }) => {
  const formattedValue = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  return (
    <Typography component='span' sx={sx}>
      {formattedValue}
    </Typography>
  );
};
