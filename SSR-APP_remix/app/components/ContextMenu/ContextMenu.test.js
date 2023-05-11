import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContextMenu from './ContextMenu';

describe('ContextMenu component', () => {
  const onCloseMock = jest.fn();
  const onEditMock = jest.fn();
  const onDeleteMock = jest.fn();

  beforeEach(() => {
    onCloseMock.mockClear();
    onEditMock.mockClear();
    onDeleteMock.mockClear();
  });

  it('renders correctly when show is true', () => {
    const { asFragment } = render(
      <ContextMenu
        show
        onClose={onCloseMock}
        onEdit={onEditMock}
        onDelete={onDeleteMock}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('does not render when show is false', () => {
    const { queryByTestId } = render(
      <ContextMenu
        show={false}
        onClose={onCloseMock}
        onEdit={onEditMock}
        onDelete={onDeleteMock}
      />
    );
    expect(queryByTestId('context-menu')).toBeNull();
  });

  it('calls onEdit and onClose when edit button is clicked', () => {
    const { getByText } = render(
      <ContextMenu
        show
        onClose={onCloseMock}
        onEdit={onEditMock}
        onDelete={onDeleteMock}
      />
    );
    fireEvent.click(getByText('Edit'));

    expect(onEditMock).toHaveBeenCalledTimes(1);
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('calls onDelete and onClose when delete button is clicked', () => {
    const { getByText } = render(
      <ContextMenu
        show
        onClose={onCloseMock}
        onEdit={onEditMock}
        onDelete={onDeleteMock}
      />
    );
    fireEvent.click(getByText('Delete'));

    expect(onDeleteMock).toHaveBeenCalledTimes(1);
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
