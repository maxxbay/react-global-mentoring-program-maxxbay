import React from 'react';
import PropTypes from 'prop-types';
import './MovieFilters.scss';

const MovieFilters = () => {
  return (
    <ul className="filters">
      <li></li>
    </ul>
  );
};

MovieFilters.propTypes = {
  movieFilter: PropTypes.string,
  setMovieFilter: PropTypes.func,
};

export default MovieFilters;
