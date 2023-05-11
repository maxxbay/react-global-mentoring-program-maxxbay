import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import GenreSelect from './GenreSelect';
import { genres } from '../MovieTile/genres';

describe('GenreSelect', () => {
  test('renders dropdown with all genres', () => {
    const onSelect = jest.fn(event => {
      expect(event).toHaveProperty('target');
      expect(event.target).toHaveProperty('value', genres[0]);
    });

    render(<GenreSelect value="All" onSelect={onSelect} />);

    const genreDropdown = screen.getByTitle(/genre/i);
    fireEvent.change(genreDropdown, {
      target: { value: genres[0] },
    });

    expect(onSelect).toHaveBeenCalled();
  });
});
