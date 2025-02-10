import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
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

export const CustomThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <MuiThemeProvider theme={darkTheme}>
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />
      {children}
    </MuiThemeProvider>
  );
};
