import { createTheme } from '@mui/material/styles';

const darkThemeColors = {
  primary: {
    main: '#90caf9', // Голубой
  },
  secondary: {
    main: '#f48fb1', // Розовый
  },
  background: {
    default: '#121212', // Темный фон
    paper: '#1e1e1e', // Светлее фон для карточек
  },
  text: {
    primary: '#ffffff', // Белый текст
    secondary: '#b3b3b3', // Серый текст
  },
  error: {
    main: '#f44336', // Красный
  },
  warning: {
    main: '#ff9800', // Оранжевый
  },
  info: {
    main: '#2196f3', // Синий
  },
  success: {
    main: '#4caf50', // Зеленый
  },
};

// Создаем тему MUI
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    ...darkThemeColors,
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});
