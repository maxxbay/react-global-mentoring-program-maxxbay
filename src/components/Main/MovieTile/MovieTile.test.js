import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MovieTile from './MovieTile';

const mockMovie = {
  title: 'Test Movie',
  release_date: '2022-03-27',
  genres: ['Action', 'Adventure'],
  poster_path: '/test_poster.jpg',
  vote_average: 7.5,
  runtime: 120,
  overview: 'This is a test movie description.',
};

describe('MovieTile', () => {
  it('renders the movie information', () => {
    render(<MovieTile movie={mockMovie} />);
    expect(screen.getByText(mockMovie.title)).toBeInTheDocument();
    expect(screen.getByText(mockMovie.release_date)).toBeInTheDocument();
    expect(screen.getByText(mockMovie.genres.join(', '))).toBeInTheDocument();
    expect(
      screen.getByText(`Rating: ${mockMovie.vote_average}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Duration: ${mockMovie.runtime} min`)
    ).toBeInTheDocument();
    expect(screen.getByText(mockMovie.overview)).toBeInTheDocument();
  });

  it('calls onClick when the tile is clicked', () => {
    const onClickMock = jest.fn();
    render(<MovieTile movie={mockMovie} onClick={onClickMock} />);
    fireEvent.click(screen.getByText(mockMovie.title));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('shows the context menu when the menu toggle is clicked', () => {
    render(<MovieTile movie={mockMovie} />);
    fireEvent.click(screen.getByText('…'));
    expect(screen.getByText('Edit')).toBeInTheDocument();
    expect(screen.getByText('Delete')).toBeInTheDocument();
  });

  it('calls onEdit when the Edit button is clicked', () => {
    const onEditMock = jest.fn();
    render(<MovieTile movie={mockMovie} onEdit={onEditMock} />);
    fireEvent.click(screen.getByText('…'));
    fireEvent.click(screen.getByText('Edit'));

    expect(onEditMock).toHaveBeenCalledTimes(1);
  });

  it('calls onDelete when the Delete button is clicked', () => {
    const onDeleteMock = jest.fn();
    render(<MovieTile movie={mockMovie} onDelete={onDeleteMock} />);
    fireEvent.click(screen.getByText('…'));
    fireEvent.click(screen.getByText('Delete'));

    expect(onDeleteMock).toHaveBeenCalledTimes(1);
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(<MovieTile movie={mockMovie} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
