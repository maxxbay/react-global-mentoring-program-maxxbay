import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import SearchForm from './SearchForm';

describe('SearchForm', () => {
  test('renders input with initial value from props', () => {
    render(<SearchForm initialSearchQuery="Initial search" />);
    const input = screen.getByRole('textbox', {
      placeholder: 'What do you want to watch?',
    });
    expect(input.value).toBe('Initial search');
  });

  test('calls "onSearch" with correct value after typing and clicking Submit', () => {
    const onSearchMock = jest.fn();
    render(
      <SearchForm initialSearchQuery="Initial search" onSearch={onSearchMock} />
    );
    const input = screen.getByRole('textbox', {
      placeholder: 'What do you want to watch?',
    });
    const submitButton = screen.getByRole('button', { name: /search/i });

    userEvent.type(input, 'New search');
    userEvent.click(submitButton);

    expect(onSearchMock).toHaveBeenCalledWith('New search');
  });

  test('calls "onSearch" with correct value after typing and pressing Enter', () => {
    const onSearchMock = jest.fn();
    render(
      <SearchForm initialSearchQuery="Initial search" onSearch={onSearchMock} />
    );
    const input = screen.getByRole('textbox', {
      placeholder: 'What do you want to watch?',
    });

    userEvent.type(input, 'New search{enter}');

    expect(onSearchMock).toHaveBeenCalledWith('New search');
  });
});
