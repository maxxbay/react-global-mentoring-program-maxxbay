import React from 'react';
import {
  render as rtlRender,
  fireEvent,
  screen,
  cleanup,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import SortControl from './SortControl';

const render = (ui, options) => {
  return rtlRender(ui, {
    container: document.body.appendChild(document.createElement('div')),
    ...options,
  });
};

describe('SortControl', () => {
  const onSelectionChange = jest.fn();

  afterEach(() => {
    cleanup();
  });

  test('renders sort control', () => {
    render(
      <SortControl currentSelection="" onSelectionChange={onSelectionChange} />
    );
    const sortByElement = screen.getByText(/SORT BY/i);
    expect(sortByElement).toBeInTheDocument();
  });

  test('should open and close dropdown on click', () => {
    render(
      <SortControl currentSelection="" onSelectionChange={onSelectionChange} />
    );
    const sortControl = screen.getByTestId('sort-control');
    fireEvent.click(sortControl);

    const openClass = 'open';
    expect(sortControl).toHaveClass(openClass);

    fireEvent.click(sortControl);
    expect(sortControl).not.toHaveClass(openClass);
  });

  test('should call onSelectionChange with the correct value when an option is selected', () => {
    render(
      <SortControl currentSelection="" onSelectionChange={onSelectionChange} />
    );
    const selectElement = screen.getByRole('combobox');
    fireEvent.change(selectElement, { target: { value: 'title' } });

    expect(onSelectionChange).toHaveBeenCalledTimes(1);
    expect(onSelectionChange).toHaveBeenCalledWith('title');
  });

  test('should render all options', () => {
    render(
      <SortControl currentSelection="" onSelectionChange={onSelectionChange} />
    );
    const selectElement = screen.getByRole('combobox');
    fireEvent.click(selectElement);

    const optionElements = screen.getAllByRole('option');
    expect(optionElements.length).toBeGreaterThan(1);
  });
});
