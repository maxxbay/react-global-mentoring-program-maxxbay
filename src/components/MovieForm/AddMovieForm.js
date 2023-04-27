import React from 'react';
import { useForm } from 'react-hook-form';
import Dialog from '../Dialog/Dialog';
import MovieForm from '../MovieForm/MovieForm';
import axios from 'axios';
import { API_URL } from '../../constants';
import { useNavigate } from 'react-router-dom';

const AddMovieForm = () => {
  const navigate = useNavigate();
  const { handleSubmit, errors } = useForm();

  const onSubmit = async data => {
    console.log('Submitting:', data);
    try {
      const formattedData = {
        title: data.title,
        tagline: '',
        poster_path: data.movieUrl,
        release_date: data.releaseDate,
        vote_count: 0,
        vote_average: parseFloat(data.rating),
        runtime: parseInt(data.runtime, 10),
        genres: [data.genre],
        overview: data.overview,
        budget: 0,
        revenue: 0,
      };
      console.log('Formatted data:', formattedData);

      const response = await axios.post(API_URL, formattedData);
      console.log('Movie added:', response.data);
      console.log('Server error messages:', response.data.messages);

      if (response.status === 201) {
        navigate('/');
      } else {
        alert(`Error adding movie: ${response.data.messages.join(', ')}`);
      }
    } catch (error) {
      console.error('Error adding movie:', error);
      console.error('Server response:', error.response);
    }
  };

  const handleClose = () => {
    navigate('/');
  };

  return (
    <Dialog title="Add Movie" onClose={handleClose}>
      <MovieForm onSubmit={handleSubmit(onSubmit)} errors={errors} />
    </Dialog>
  );
};

export default AddMovieForm;
