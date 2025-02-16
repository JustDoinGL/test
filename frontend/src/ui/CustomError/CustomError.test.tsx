import { render, screen } from '@testing-library/react';
import { CustomError } from './CustomError';

describe('CustomError', () => {
  test('рендерится с типом "error" по умолчанию', () => {
    render(<CustomError />);

    const errorMessage = screen.getByText(
      /Очень жаль, произошла ошибка, попробуйте позже или перезагрузите страницу./i
    );
    expect(errorMessage).toBeInTheDocument();

    const box = screen.getByTestId('custom-error-box');
    expect(box).toHaveStyle('background-color: #f8d7da');
    expect(box).toHaveStyle('color: #721c24');
    expect(box).toHaveStyle('border-color: #f5c6cb');
  });

  test('рендерится с типом "warning" и кастомным текстом', () => {
    render(<CustomError errorType='warning' errorText='Внимание! Что-то пошло не так.' />);

    const errorText = screen.getByText(/Внимание! Что-то пошло не так./i);
    expect(errorText).toBeInTheDocument();

    const box = screen.getByTestId('custom-error-box');
    expect(box).toHaveStyle('background-color: #fff3cd');
    expect(box).toHaveStyle('color: #856404');
    expect(box).toHaveStyle('border-color: #ffeeba');
  });

  test('применяет кастомные стили через проп sx', () => {
    const customStyles = { marginTop: '20px', padding: '10px' };
    render(<CustomError sx={customStyles} />);

    const box = screen.getByTestId('custom-error-box');
    expect(box).toHaveStyle('margin-top: 20px');
    expect(box).not.toHaveStyle('padding: 10px');
  });

  test('рендерится с типом "info" и без дополнительного текста', () => {
    render(<CustomError errorType='info' />);

    const defaultErrorMessage = screen.queryByText(
      /Очень жаль, произошла ошибка, попробуйте позже или перезагрузите страницу./i
    );
    expect(defaultErrorMessage).not.toBeInTheDocument();

    const box = screen.getByTestId('custom-error-box');
    expect(box).toHaveStyle('background-color: #d0e7ff');
    expect(box).toHaveStyle('color: #0c5460');
    expect(box).toHaveStyle('border-color: #bee5eb');
  });
});
