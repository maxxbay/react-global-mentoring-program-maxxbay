import React from 'react';
import MovieTile from '../MovieTile/MovieTile';
import './MovieList.scss';

const MovieList = ({ movies, onMovieClick }) => {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieTile key={movie.id} movie={movie} onClick={onMovieClick} />
      ))}
    </div>
  );
};
MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      releaseYear: PropTypes.number.isRequired,
      genre: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
  onMovieClick: PropTypes.func.isRequired,
};
export default MovieList;
