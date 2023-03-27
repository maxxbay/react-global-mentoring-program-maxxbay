import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MovieDetails from './MovieDetails';

const mockMovie = {
  poster_path: '/mockPosterPath.jpg',
  title: 'Mock Movie Title',
  release_date: '2022-01-01',
  vote_average: 8.5,
  runtime: 120,
  overview: 'Mock movie overview',
};

describe('MovieDetails', () => {
  test('renders movie details correctly', () => {
    const { asFragment } = render(<MovieDetails movie={mockMovie} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders "Movie not found" when no movie is provided', () => {
    render(<MovieDetails />);
    expect(screen.getByText('Movie not found')).toBeInTheDocument();
  });

  test('renders movie information when provided with a movie', () => {
    render(<MovieDetails movie={mockMovie} />);
    expect(screen.getByText(mockMovie.title)).toBeInTheDocument();
    expect(screen.getByText(mockMovie.release_date)).toBeInTheDocument();
    expect(
      screen.getByText(`Rating: ${mockMovie.vote_average}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Duration: ${mockMovie.runtime} min`)
    ).toBeInTheDocument();
    expect(screen.getByText(mockMovie.overview)).toBeInTheDocument();
  });

  test('renders movie poster with correct src and alt attributes', () => {
    render(<MovieDetails movie={mockMovie} />);
    const moviePoster = screen.getByAltText(mockMovie.title);
    expect(moviePoster).toBeInTheDocument();
    expect(moviePoster).toHaveAttribute(
      'src',
      `https://image.tmdb.org/t/p/w185${mockMovie.poster_path}`
    );
  });
});
