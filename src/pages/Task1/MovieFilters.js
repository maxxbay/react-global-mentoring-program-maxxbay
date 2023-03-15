import React from 'react';
import PropTypes from 'prop-types';
import movies from './movies.json';
import './MovieFilters.scss';

const MovieFilters = ({ setMovieFilter, movieFilter }) => {
  const splitData = data =>
    data.reduce((acc, current) => [...acc, ...current.Genre.split(', ')], []);

  const filters = [
    ...new Set(
      splitData(movies)
        .flat(Infinity)
        .map(el => el.trim())
    ),
  ];

  const movieFilters = [
    { movie: [] },
    ...filters.map(filter => ({ movie: filter })),
  ];

  return (
    <ul className="filters">
      {movieFilters.map(({ movie }) => (
        <li
          key={movie}
          className={movie === movieFilter ? 'active' : ''}
          // onClick={() => setMovieFilter({ movie })}
        >
          {movie}
        </li>
      ))}
    </ul>
  );
};

MovieFilters.propTypes = {
  movieFilter: PropTypes.string,
  setMovieFilter: PropTypes.func,
};

export default MovieFilters;
