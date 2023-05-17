import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import MovieListPage from './MovieListPage';
import '@testing-library/jest-dom';
import useFetch from '../../Hooks/useFetch';

jest.mock('../../Hooks/useFetch');

const mockMovie = {
  id: 1,
  title: 'Mock Movie',
  release_date: '2022-01-01',
  genres: ['Action', 'Adventure'],
  poster_path: 'https://example.com/mock-movie-poster.jpg',
  vote_average: 7.5,
  runtime: 120,
  overview: 'A brief description of the mock movie.',
};

const history = createMemoryHistory();
console.log(history);

describe('MovieListPage', () => {
  beforeEach(() => {
    useFetch.mockReturnValue({
      loading: false,
      error: null,
      data: [mockMovie],
      getData: jest.fn(),
    });
  });

  it('navigates to the movie details page when a movie tile is clicked', async () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <Routes>
          <Route path="/" element={<MovieListPage />} />
          <Route
            path="/movies/:id"
            element={<div data-testid="movie-details" />}
          />
        </Routes>
      </MemoryRouter>
    );

    await screen.findByText(mockMovie.title);

    fireEvent.click(screen.getByText(mockMovie.title));

    await waitFor(() =>
      expect(
        container.querySelector('[data-testid="movie-details"]')
      ).toBeInTheDocument()
    );
  });
});
