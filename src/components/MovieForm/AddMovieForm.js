import React, { useState } from 'react';
import Dialog from '../Dialog/Dialog';
import MovieForm from '../MovieForm/MovieForm';
import { API_URL } from '../../constants';
import { useForm } from 'react-hook-form';
import useFetch from 'Hooks/useFetch';
import { formatMovieData } from '../../helpers';
import { useNavigate } from 'react-router-dom';

const AddMovieForm = () => {
  const navigate = useNavigate();
  const [errorDialogOpen, setErrorDialogOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { post: addMovie } = useFetch(API_URL);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleClose = () => {
    navigate('/');
  };

  const handleErrorDialogClose = () => {
    setErrorMessage('');
  };

  const onSubmit = async data => {
    console.log('Submitting:', data);
    try {
      const formattedData = formatMovieData(data);
      console.log('Formatted data:', formattedData);

      const response = await addMovie(API_URL, formattedData);
      console.log('Movie added:', response.data);

      if (response.status === 201) {
        navigate('/');
      } else {
        setErrorMessage('Error adding movie.');
      }
    } catch (error) {
      console.error('Error adding movie:', error);
      console.error('Server response:', error.response);
      if (error.response && error.response.status === 400) {
        setErrorDialogOpen(true);
        setErrorMessage(response.data.messages.join(', '));
      } else {
        setErrorMessage(
          'An unexpected error occurred. Please try again later.'
        );
      }
    }
  };

  return (
    <>
      <Dialog title="Add Movie" onClose={handleClose}>
        <MovieForm
          onSubmit={handleSubmit(onSubmit)}
          onReset={() => {
            reset();
          }}
        />
      </Dialog>
      {errorDialogOpen && (
        <Dialog title="Error" onClose={handleErrorDialogClose}>
          <p>
            An error occurred while adding the movie. Please check the input
            values and try again.
          </p>
        </Dialog>
      )}
      {errorMessage && (
        <Dialog title="Error" onClose={handleErrorDialogClose}>
          <p>{errorMessage}</p>
        </Dialog>
      )}
    </>
  );
};

export default AddMovieForm;
