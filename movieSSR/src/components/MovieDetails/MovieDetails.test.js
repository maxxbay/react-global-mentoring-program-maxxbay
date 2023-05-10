import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieDetails from './MovieDetails';

const movie = {
  poster_path: '/example.jpg',
  title: 'Example Movie',
  release_date: '2022-01-01',
  vote_average: 7.5,
  runtime: 120,
  overview: 'A thrilling example movie.',
};

describe('MovieDetails component', () => {
  it('renders the release year', () => {
    render(<MovieDetails movie={movie} />);
    expect(
      screen.getByText((content, node) => {
        return content.startsWith('2022') && node.tagName.toLowerCase() === 'p';
      })
    ).toBeInTheDocument();
  });

  it('renders the movie rating', () => {
    render(<MovieDetails movie={movie} />);
    expect(
      screen.getByText(`Rating: ${movie.vote_average}`, {
        selector: '.movie-details__rating',
      })
    ).toBeInTheDocument();
  });

  it('renders the movie duration', () => {
    render(<MovieDetails movie={movie} />);
    expect(
      screen.getByText(`Duration: ${movie.runtime} min`, {
        selector: '.movie-details__duration',
      })
    ).toBeInTheDocument();
  });

  it('renders the movie description', () => {
    render(<MovieDetails movie={movie} />);
    expect(
      screen.getByText(movie.overview, {
        selector: '.movie-details__description',
      })
    ).toBeInTheDocument();
  });

  it('renders "Movie not found" if movie prop is not provided', () => {
    render(<MovieDetails movie={null} />);
    expect(screen.getByText('Movie not found')).toBeInTheDocument();
  });
});
