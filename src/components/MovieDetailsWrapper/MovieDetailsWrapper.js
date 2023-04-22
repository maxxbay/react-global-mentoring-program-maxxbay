import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import MovieDetails from '../MovieDetails/MovieDetails';
import './MovieDetailsWrapper.scss';

const MovieDetailsWrapper = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();

  const url = `http://localhost:4000/movies/${movieId}`;
  const { loading, error, data: movie } = useFetch(url);

  const handleMovieDetailsClose = () => {
    navigate('/');
  };

  if (loading) {
    return <div className="movie-details">Loading...</div>;
  }

  if (error) {
    return <div className="movie-details">Error: {error}</div>;
  }

  if (!movie) {
    return <div className="movie-details">Movie not found</div>;
  }

  return (
    <div className="movie-details-wrapper" onClick={handleMovieDetailsClose}>
      <MovieDetails movie={movie} />
    </div>
  );
};

export default MovieDetailsWrapper;
