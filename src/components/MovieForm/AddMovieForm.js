import React from 'react';
import { useForm } from 'react-hook-form';
import Dialog from '../Dialog/Dialog';
import MovieForm from '../MovieForm/MovieForm';
import axios from 'axios';
import { API_URL } from '../../constants';
import { useNavigate } from 'react-router-dom';

const AddMovieForm = () => {
  const navigate = useNavigate();

  const onSubmit = async data => {
    console.log('Submitting:', data);
    try {
      const formattedData = {
        title: data.title || 'Untitled',
        poster_path: data.poster_path || 'https://via.placeholder.com/150',
        release_date: data.release_date || '1970-01-01',
        vote_average: data.vote_average ? parseFloat(data.vote_average) : 0,
        runtime: data.runtime ? parseInt(data.runtime, 10) : 0,
        genres: [data.genre || 'Other'],
        overview: data.overview || 'No overview',
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
      if (error.response.status === 400) {
        alert('Bad Request: ' + error.response.data.messages.join(', '));
      }
    }
  };

  const handleClose = () => {
    navigate('/');
  };

  return (
    <Dialog title="Add Movie" onClose={handleClose}>
      <MovieForm onSubmit={onSubmit} />
    </Dialog>
  );
};

export default AddMovieForm;
