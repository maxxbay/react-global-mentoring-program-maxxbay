import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './MovieDetails.scss';

const MovieDetails = ({ movie, onClose }) => {
  const {
    poster_path: imageUrl,
    title: movieName,
    release_date: releaseYear,
    vote_average: rating,
    runtime: duration,
    overview: description,
  } = movie;

  const imageBaseUrl = 'https://image.tmdb.org/t/p/';
  const imageWidth = 'w185';

  const handleCloseClick = e => {
    e.stopPropagation();
    if (typeof onClose === 'function') {
      onClose();
    }
  };

  return (
    <div className="movie-details">
      <Button className="movie-details__close" onClick={handleCloseClick}>
        &times;
      </Button>
      <img
        className="movie-details__image"
        src={`${imageBaseUrl}${imageWidth}${imageUrl}`}
        alt={movieName}
      />
      <div className="movie-details__info">
        <h2 className="movie-details__title">{movieName}</h2>
        <p className="movie-details__year">{releaseYear}</p>
        <p className="movie-details__rating">Rating: {rating}</p>
        <p className="movie-details__duration">Duration: {duration} min</p>
        <p className="movie-details__description">{description}</p>
      </div>
    </div>
  );
};
MovieDetails.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    runtime: PropTypes.number,
    overview: PropTypes.string.isRequired,
  }),
  onClose: PropTypes.func,
};

export default MovieDetails;
