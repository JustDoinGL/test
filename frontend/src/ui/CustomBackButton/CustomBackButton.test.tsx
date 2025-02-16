import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { CustomBackButton } from './CustomBackButton';
import { useNavigate } from 'react-router';

vi.mock('react-router', () => ({
  useNavigate: vi.fn(),
}));

describe('CustomBackButton', () => {
  test('рендерится с переданным текстом', () => {
    render(<CustomBackButton label='Вернуться назад' />);

    const button = screen.getByRole('button', { name: /Вернуться назад/i });
    expect(button).toBeInTheDocument();
  });

  test('вызывает navigate с правильным аргументом при клике', () => {
    const navigateMock = vi.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigateMock);

    render(<CustomBackButton step={-2} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(navigateMock).toHaveBeenCalledWith(-2);
  });

  test('использует значение по умолчанию для label, если оно не передано', () => {
    render(<CustomBackButton />);

    const button = screen.getByRole('button', { name: /Назад/i });
    expect(button).toBeInTheDocument();
  });

  test('использует значение по умолчанию для step, если оно не передано', () => {
    const navigateMock = vi.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigateMock);

    render(<CustomBackButton />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(navigateMock).toHaveBeenCalledWith(-1);
  });
});
