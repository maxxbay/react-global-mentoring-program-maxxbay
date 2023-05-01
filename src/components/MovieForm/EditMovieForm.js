import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Dialog from '../Dialog/Dialog';
import MovieForm from './MovieForm';
import { API_URL } from '../../constants';
import useFetch from '../../Hooks/useFetch';

const EditMovieForm = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const { data, loading, error, put } = useFetch(`${API_URL}/${movieId}`);

  const onSubmit = async data => {
    try {
      await put({ ...data, id: movieId });
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

  const movie = data && !Array.isArray(data) ? data : null;
  return (
    <Dialog title="Edit Movie" onClose={handleClose}>
      <MovieForm onSubmit={onSubmit} movie={movie} />
    </Dialog>
  );
};

export default EditMovieForm;
