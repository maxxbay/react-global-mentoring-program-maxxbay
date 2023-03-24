import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GenreSelect from './GenreSelect';

describe('GenreSelect', () => {
  const genres = ['Action', 'Comedy', 'Drama'];

  test('renders all genres passed in props', () => {
    render(<GenreSelect genres={genres} />);
    genres.forEach(genre => {
      expect(screen.getByText(genre, { exact: false })).toBeInTheDocument();
    });
  });

  test('highlights a selected genre passed in props', () => {
    render(<GenreSelect genres={genres} selectedGenre="Drama" />);
    const selectElement = screen.getByTitle('Genre');
    expect(selectElement.value).toBe('Drama');
  });

  test('calls "onSelect" with correct genre after click event', () => {
    const onSelectMock = jest.fn();
    render(<GenreSelect genres={genres} onSelect={onSelectMock} />);

    const selectElement = screen.getByTitle('Genre');
    fireEvent.change(selectElement, { target: { value: 'Comedy' } });

    expect(onSelectMock).toHaveBeenCalledWith('Comedy');
  });
});
