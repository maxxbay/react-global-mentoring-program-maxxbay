import React from 'react';
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

export default MovieDetails;
