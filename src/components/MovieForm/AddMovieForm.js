import React, { useState } from 'react';
import Dialog from '../Dialog/Dialog';
import MovieForm from '../MovieForm/MovieForm';
import { API_POST_URL } from '../../constants';
import { useForm } from 'react-hook-form';
import useFetch from 'Hooks/useFetch';
import { formatMovieData } from '../../helpers';
import { useNavigate } from 'react-router-dom';

const AddMovieForm = () => {
  const navigate = useNavigate();
  const [errorDialogOpen, setErrorDialogOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { post: addMovie } = useFetch(API_POST_URL);

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
    const formattedData = formatMovieData(data);
    console.log('Formatted data:', formattedData);

    const response = await addMovie(`${API_POST_URL}/movies`, formattedData);
    console.log('Movie added:', response.data);
    navigate('/');
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
