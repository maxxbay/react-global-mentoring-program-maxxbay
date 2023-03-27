import React from 'react';
import './MovieDetails.scss';

const MovieDetails = ({ movie }) => {
  if (!movie) {
    return <div className="movie-details">Movie not found</div>;
  }

  const { poster_path, title, release_date, vote_average, runtime, overview } =
    movie;

  return (
    <div className="movie-details">
      <img
        className="movie-details__image"
        src={`https://image.tmdb.org/t/p/w185${poster_path}`}
        alt={title}
      />
      <div className="movie-details__info">
        <h2 className="movie-details__title">{title}</h2>
        <p className="movie-details__year">{release_date}</p>
        <p className="movie-details__rating">Rating: {vote_average}</p>
        <p className="movie-details__duration">Duration: {runtime} min</p>
        <p className="movie-details__description">{overview}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
