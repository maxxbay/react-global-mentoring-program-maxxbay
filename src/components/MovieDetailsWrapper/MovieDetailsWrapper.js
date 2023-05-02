import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import MovieDetails from '../MovieDetails/MovieDetails';
import './MovieDetailsWrapper.scss';
import { API_URL } from '../../constants';

const MovieDetailsWrapper = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();

  const url = `${API_URL}/${movieId}`;
  const { loading, error, data: movieData, getData } = useFetch();
  const movie = Array.isArray(movieData) ? movieData[0] : movieData;
  useEffect(() => {
    getData(url);
  }, [url, getData]);
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
      <MovieDetails movie={movie} onClose={handleMovieDetailsClose} />
    </div>
  );
};

export default MovieDetailsWrapper;
