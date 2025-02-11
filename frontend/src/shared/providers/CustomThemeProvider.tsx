import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, GlobalStyles } from '@mui/material';
import { darkTheme } from '@/assets';

const globalStyles = {
  body: {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  '*, *::before, *::after': {
    boxSizing: 'inherit',
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
