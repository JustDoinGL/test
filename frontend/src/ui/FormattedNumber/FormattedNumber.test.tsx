import { render, screen } from '@testing-library/react';
import { FormattedNumber } from './FormattedNumber';
import { ThemeProvider, createTheme } from '@mui/material/styles';

describe('FormattedNumber', () => {
  const theme = createTheme();

  test('форматирует число с пробелами между тысячами', () => {
    render(
      <ThemeProvider theme={theme}>
        <FormattedNumber value={1234567} />
      </ThemeProvider>
    );

    const formattedText = screen.getByText('1 234 567');
    expect(formattedText).toBeInTheDocument();
  });

  test('рендерится с кастомными стилями', () => {
    const customStyles = { color: 'red', fontSize: '20px' };
    render(
      <ThemeProvider theme={theme}>
        <FormattedNumber value={1000} sx={customStyles} />
      </ThemeProvider>
    );

    const formattedText = screen.getByText('1 000');
    expect(formattedText).toHaveStyle('color: red');
    expect(formattedText).toHaveStyle('font-size: 20px');
  });

  test('рендерится с числом меньше 1000 (без пробелов)', () => {
    render(
      <ThemeProvider theme={theme}>
        <FormattedNumber value={999} />
      </ThemeProvider>
    );

    const formattedText = screen.getByText('999');
    expect(formattedText).toBeInTheDocument();
  });

  test('рендерится с отрицательным числом', () => {
    render(
      <ThemeProvider theme={theme}>
        <FormattedNumber value={-1234567} />
      </ThemeProvider>
    );

    const formattedText = screen.getByText('-1 234 567');
    expect(formattedText).toBeInTheDocument();
  });

  test('рендерится с нулем', () => {
    render(
      <ThemeProvider theme={theme}>
        <FormattedNumber value={0} />
      </ThemeProvider>
    );

    const formattedText = screen.getByText('0');
    expect(formattedText).toBeInTheDocument();
  });
});
