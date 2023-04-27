import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Dialog from '../Dialog/Dialog';
import MovieForm from './MovieForm';
import axios from 'axios';
import { API_EDIT_URL } from '../../constants';

const EditMovieForm = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`${API_EDIT_URL}/movies/${movieId}`);
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie:', error.response || error);
      }
    };
    fetchMovie();
  }, [movieId]);

  const onSubmit = async data => {
    try {
      await axios.put(`${API_EDIT_URL}/movies`, { ...data, id: movieId });
      navigate('/');
    } catch (error) {
      console.error('Error updating movie:', error.response || error);
    }
  };

  const handleClose = () => {
    navigate('/');
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <Dialog title="Edit Movie" onClose={handleClose}>
      <MovieForm onSubmit={onSubmit} movie={movie} />
    </Dialog>
  );
};

export default EditMovieForm;
