import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Dialog from '../Dialog/Dialog';
import MovieForm from './MovieForm';
import { API_EDIT_URL } from '../../constants';
import { editMovieData } from '../../helpers';
import useFetch from '../../Hooks/useFetch';

const EditMovieForm = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const { data, loading, error, getData, put } = useFetch(
    `${API_EDIT_URL}/movies`
  );

  useEffect(() => {
    if (movieId) {
      getData(`${API_EDIT_URL}/movies/${movieId}`);
    }
  }, [movieId, getData]);

  const [submitted, setSubmitted] = useState(false);
  const [movieData, setMovieData] = useState({});

  const onSubmit = data => {
    setMovieData(editMovieData(movieId, data));
    setSubmitted(true);
  };

  useEffect(() => {
    if (submitted && movieData) {
      const updateMovie = async () => {
        await put(movieId, movieData);
        setSubmitted(false);
        navigate('/');
      };
      updateMovie();
    }
  }, [submitted, movieData, movieId, put, navigate]);

  const handleClose = () => {
    navigate('/');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const movie = data && !Array.isArray(data) ? data : {};

  return (
    <Dialog title="Edit Movie" onClose={handleClose}>
      <MovieForm onSubmit={onSubmit} movie={movie} />
    </Dialog>
  );
};

export default EditMovieForm;
