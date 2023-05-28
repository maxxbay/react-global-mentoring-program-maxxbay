import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import MovieTile from './MovieTile';
import ContextMenu from '../ContextMenu/ContextMenu';
import '@testing-library/jest-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

const mockMovie = {
  id: 1,
  title: 'Mock Movie',
  release_date: '2022-01-01',
  genres: ['Action', 'Adventure'],
  poster_path: '/mock-poster.jpg',
  vote_average: 7.5,
  runtime: 120,
  overview: 'This is a mock movie.',
};

describe('MovieTile component', () => {
  it('renders correctly', () => {
    const { container } = render(<MovieTile movie={mockMovie} />);
    expect(container).toMatchSnapshot();
  });

  it('renders movie data correctly', () => {
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
    expect(screen.getByAltText(mockMovie.title)).toHaveAttribute(
      'src',
      `https://image.tmdb.org/t/p/w185${mockMovie.poster_path}`
    );
  });

  it('calls onClick function when clicked', () => {
    const handleClick = jest.fn();
    render(<MovieTile movie={mockMovie} onClick={handleClick} />);
    fireEvent.click(screen.getByText(mockMovie.title));
    expect(handleClick).toHaveBeenCalledWith(mockMovie);
  });

  it('opens context menu when toggle button is clicked', () => {
    render(<MovieTile movie={mockMovie} />);
    const toggleButton = screen.getByRole('button', { name: 'context menu' });
    fireEvent.click(toggleButton);
    expect(screen.getByText('Edit')).toBeInTheDocument();
    expect(screen.getByText('Delete')).toBeInTheDocument();
  });

  it('does not open context menu when toggle button is not clicked', () => {
    render(<MovieTile movie={mockMovie} />);
    expect(screen.queryByText('Edit')).not.toBeInTheDocument();
    expect(screen.queryByText('Delete')).not.toBeInTheDocument();
  });
});

describe('ContextMenu component', () => {
  it('renders correctly when show is true', () => {
    const { asFragment } = render(
      <ContextMenu
        show
        onClose={jest.fn()}
        onEdit={jest.fn()}
        onDelete={jest.fn()}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('does not render when show is false', () => {
    const onClose = jest.fn();

    render(
      <ContextMenu
        show={false}
        onClose={onClose}
        onEdit={jest.fn()}
        onDelete={jest.fn()}
      />
    );

    expect(screen.queryByText('Edit')).not.toBeInTheDocument();
    expect(screen.queryByText('Delete')).not.toBeInTheDocument();
  });

  it('calls onClose function when edit button is clicked', () => {
    const handleClose = jest.fn();
    render(
      <ContextMenu
        show
        onClose={handleClose}
        onEdit={jest.fn()}
        onDelete={jest.fn()}
      />
    );
    const editButton = screen.getByText('Edit');
    fireEvent.click(editButton);
    expect(handleClose).toHaveBeenCalled();
  });

  it('calls onClose function when delete button is clicked', () => {
    const handleClose = jest.fn();
    render(
      <ContextMenu
        show
        onClose={handleClose}
        onEdit={jest.fn()}
        onDelete={jest.fn()}
      />
    );
    const deleteButton = screen.getByText('Delete');
    fireEvent.click(deleteButton);
    expect(handleClose).toHaveBeenCalled();
  });
});
