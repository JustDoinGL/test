import { screen, fireEvent } from '@testing-library/react';
import { CustomModal } from './CustomModal';
import { vi } from 'vitest';
import { renderWithProviders } from '@/shared';

describe('CustomModal', () => {
  test('рендерится, когда open = true', () => {
    renderWithProviders(
      <CustomModal open={true} onClose={() => {}}>
        <div>Тестовый контент</div>
      </CustomModal>
    );

    const modalContent = screen.getByText('Тестовый контент');
    expect(modalContent).toBeInTheDocument();
  });

  test('не рендерится, когда open = false', () => {
    renderWithProviders(
      <CustomModal open={false} onClose={() => {}}>
        <div>Тестовый контент</div>
      </CustomModal>
    );

    const modalContent = screen.queryByText('Тестовый контент');
    expect(modalContent).not.toBeInTheDocument();
  });

  test('вызывает onClose при клике на кнопку закрытия', () => {
    const onCloseMock = vi.fn();
    renderWithProviders(
      <CustomModal open={true} onClose={onCloseMock}>
        <div>Тестовый контент</div>
      </CustomModal>
    );

    const closeButton = screen.getByLabelText('close');
    fireEvent.click(closeButton);
    expect(onCloseMock).toHaveBeenCalled();
  });
});
