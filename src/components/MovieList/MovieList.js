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

export default MovieList;
