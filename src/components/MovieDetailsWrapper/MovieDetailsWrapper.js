import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import MovieDetails from '../MovieDetails/MovieDetails';
import './MovieDetailsWrapper.scss';

const MovieDetailsWrapper = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  const url = `http://localhost:4000/movies/${movieId}`;
  const params = useMemo(() => {
    return {};
  }, []);

  const { data: fetchedMovie } = useFetch(url, params);

  useEffect(() => {
    if (!Array.isArray(fetchedMovie)) {
      setMovie(fetchedMovie);
    }
  }, [fetchedMovie]);

  const handleMovieDetailsClose = () => {
    navigate('/');
  };

  return <MovieDetails movie={movie} onClose={handleMovieDetailsClose} />;
};

export default MovieDetailsWrapper;
