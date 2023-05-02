import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Dialog from '../Dialog/Dialog';
import MovieForm from './MovieForm';
import { API_EDIT_URL } from '../../constants';
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

  const onSubmit = async data => {
    try {
      await put(movieId, data);
      navigate('/');
    } catch (error) {
      console.error('Error updating movie:', error.response || error);
    }
  };

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
