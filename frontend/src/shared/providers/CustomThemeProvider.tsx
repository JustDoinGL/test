import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, GlobalStyles } from '@mui/material';
import { darkTheme } from '@/assets';

const globalStyles = {
  body: {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    minHeight: '100vh',
  },
  html: {
    minHeight: '100vh',
  },
  '*, *::before, *::after': {
    boxSizing: 'inherit',
  },
  'h1, h2, h3, h4, h5, h6, p, span': {
    fontSize: 'clamp(1rem, 2vw, 0.5rem)',
    margin: 0,
  },
  h1: {
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
    fontWeight: 'bold',
  },
  h3: {
    fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
    fontWeight: 'bold',
  },
  p: {
    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
    lineHeight: 1.6,
  },
  button: {
    textTransform: 'capitalize',
  },
  a: {
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
      textDecoration: 'none',
    },
  },
};

export const CustomThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />
      {children}
    </ThemeProvider>
  );
};
