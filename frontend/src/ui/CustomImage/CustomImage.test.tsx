import { fireEvent, render, screen } from '@testing-library/react';
import { CustomImage } from './CustomImage';

describe('CustomImage', () => {
  test('рендерится с изображением по умолчанию, если src не передан', () => {
    render(<CustomImage />);

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', '/NoPhoto.png');
    expect(image).toHaveAttribute('alt', 'Нету фото');
  });

  test('рендерится с переданным src и alt', () => {
    render(<CustomImage src='https://example.com/image.jpg' alt='Пример изображения' />);

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', 'https://example.com/image.jpg');
    expect(image).toHaveAttribute('alt', 'Пример изображения');
  });

  test('отображает изображение по умолчанию при ошибке загрузки', () => {
    render(<CustomImage src='https://example.com/invalid-image.jpg' />);

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', 'https://example.com/invalid-image.jpg');

    fireEvent.error(image);
    expect(image).toHaveAttribute('src', '/NoPhoto.png');
    expect(image).toHaveAttribute('alt', 'Нету фото');
  });

  test('применяет кастомные стили через проп sx', () => {
    const customStyles = { marginTop: '20px', padding: '10px' };
    render(<CustomImage sx={customStyles} />);

    const container = screen.getByTestId('custom-image-container');
    expect(container).toHaveStyle('margin-top: 20px');
    expect(container).toHaveStyle('padding: 10px');
  });

  test('применяет переданные width и height', () => {
    render(<CustomImage width={200} height={150} />);

    const container = screen.getByTestId('custom-image-container');
    expect(container).toHaveStyle('width: 200px');
    expect(container).toHaveStyle('height: 150px');
  });
});
