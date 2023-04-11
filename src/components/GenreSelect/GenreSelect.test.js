import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import GenreSelect from './GenreSelect';
import { genres } from '../MovieTile/genres';

describe('GenreSelect', () => {
  test('renders dropdown with all genres', () => {
    const onSelect = jest.fn();
    render(<GenreSelect genres={genres} onSelect={onSelect} />);

    fireEvent.change(screen.getByTitle(/genre/i), {
      target: { value: genres[0] },
    });

    expect(onSelect).toHaveBeenCalledWith(genres[0]);
  });
});
