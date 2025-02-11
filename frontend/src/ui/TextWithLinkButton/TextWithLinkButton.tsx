import { Link } from 'react-router';
import { Box, Button, Typography } from '@mui/material';

type TextWithLinkButton = {
  text: string;
  buttonText: string;
  buttonLink: string;
};

export const TextWithLinkButton = ({ text, buttonText, buttonLink }: TextWithLinkButton) => {
  return (
    <Box sx={{ display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'center' }}>
      <Typography variant='h6'>{text}</Typography>
      <Button component={Link} to={buttonLink} variant='contained'>
        {buttonText}
      </Button>
    </Box>
  );
};
