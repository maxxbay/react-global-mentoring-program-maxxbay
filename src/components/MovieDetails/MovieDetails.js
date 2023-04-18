import React from 'react';
import PropTypes from 'prop-types';
import './MovieDetails.scss';

const MovieDetails = ({ movie }) => {
  if (!movie) {
    return <div className="movie-details">Movie not found</div>;
  }

  const {
    poster_path: imageUrl,
    title: movieName,
    release_date: releaseYear,
    vote_average: rating,
    runtime: duration,
    overview: description,
  } = movie;

  return (
    <div className="movie-details">
      <img
        className="movie-details__image"
        src={`https://image.tmdb.org/t/p/w185${imageUrl}`}
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
};
export default MovieDetails;
