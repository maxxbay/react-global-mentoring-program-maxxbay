import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchForm from './SearchForm';

describe('SearchForm', () => {
  test('renders an input with the value equal to initial value passed in props', () => {
    render(<SearchForm initialSearchQuery="Initial search" />);
    const input = screen.getByPlaceholderText('What do you want to watch?');
    expect(input.value).toBe('Initial search');
  });

  test('after typing to the input and a "click" event on the Submit button, the "onSearch" prop is called with proper value', () => {
    const onSearchMock = jest.fn();
    render(
      <SearchForm initialSearchQuery="Initial search" onSearch={onSearchMock} />
    );
    const input = screen.getByPlaceholderText('What do you want to watch?');
    const submitButton = screen.getByText('search');

    fireEvent.change(input, { target: { value: 'New search' } });
    fireEvent.click(submitButton);

    expect(onSearchMock).toHaveBeenCalledWith('New search');
  });

  test('after typing to the input and pressing Enter key, the "onSearch" prop is called with proper value', () => {
    const onSearchMock = jest.fn();
    render(
      <SearchForm initialSearchQuery="Initial search" onSearch={onSearchMock} />
    );
    const input = screen.getByPlaceholderText('What do you want to watch?');

    fireEvent.change(input, { target: { value: 'New search' } });
    fireEvent.submit(input);

    expect(onSearchMock).toHaveBeenCalledWith('New search');
  });
});
