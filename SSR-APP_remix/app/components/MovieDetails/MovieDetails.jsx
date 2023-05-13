import React from 'react';
import { useLoaderData } from '@remix-run/react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import { API_URL } from '../../constants';
import { Link } from 'react-router-dom';

import stylesDetails from '~/styles/MovieDetails.css';

export function MovieDetailsLinks() {
  return <link rel="stylesheet" href={stylesDetails} />;
}

export async function loader({ params }) {
  const movieId = params.movieId;
  console.log(movieId);
  const response = await fetch(`${API_URL}/${movieId}`);
  const movie = await response.json();
  return movie;
}

const MovieDetails = ({ movie, onClose }) => {
  const movie = useLoaderData();
  if (!movie) {
    return <p>Movie not found</p>;
  }
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
      <Link
        to={'/'}
        className="movie-details__close"
        onClick={handleCloseClick}
      >
        &times;
      </Link>
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

export default MovieDetails;
