import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dialog from './Dialog';

jest.mock('focus-trap-react');

describe('Dialog component', () => {
  const onCloseMock = jest.fn();
  const title = 'Test Dialog Title';
  const content = 'Test Dialog Content';

  const renderDialog = () => {
    onCloseMock.mockClear();
    return render(
      <Dialog title={title} onClose={onCloseMock}>
        {content}
      </Dialog>
    );
  };

  it('renders the Dialog title and content', () => {
    renderDialog();
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(content)).toBeInTheDocument();
  });

  it('calls onClose function when clicking the close button', () => {
    renderDialog();
    fireEvent.click(screen.getByRole('button', { name: '×' }));
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('calls onClose function when clicking the overlay', () => {
    renderDialog();
    fireEvent.click(screen.getByTestId('dialog-overlay'));
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('does not call onClose function when clicking the dialog content', () => {
    renderDialog();
    fireEvent.click(screen.getByRole('dialog'));
    expect(onCloseMock).toHaveBeenCalledTimes(0);
  });

  it('focuses the close button by default', () => {
    renderDialog();
    expect(screen.getByRole('button', { name: '×' })).toHaveFocus();
  });
});
