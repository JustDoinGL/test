import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router';
import { Button, Typography, Container, Box } from '@mui/material';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { PATHS } from '@/assets';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const AnimatedText = styled(Typography)`
  animation: ${fadeIn} 1s ease-in;
`;

export const NotFoundPage = () => {
  const [message, setMessage] = useState('Страница не найдена...');
  const navigate = useNavigate();

  const handleNavigation = useCallback(() => {
    navigate(PATHS.mainPage);
  }, [navigate]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage('Перенаправляем вас...');
    }, 3000);

    const redirectTimer = setTimeout(() => {
      handleNavigation();
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearTimeout(redirectTimer);
    };
  }, [handleNavigation]);

  return (
    <Container
      data-testid='NotFoundPage'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <Box>
        <AnimatedText variant='h3' gutterBottom>
          {message}
        </AnimatedText>
        <Button variant='contained' color='primary' onClick={handleNavigation} sx={{ mt: 3 }}>
          Вернуться назад
        </Button>
      </Box>
    </Container>
  );
};
