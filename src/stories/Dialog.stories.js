import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Dialog from '../components/Dialog/Dialog';
import MovieForm from '../components/MovieForm/MovieForm';

storiesOf('Dialog', module)
  .add('Add Movie', () => {
    const [isDialogOpen, setIsDialogOpen] = useState(true);
    const handleDialogClose = () => {
      setIsDialogOpen(false);
    };
    const handleSubmit = movie => {
      console.log('Submitted movie:', movie);
      setIsDialogOpen(false);
    };

    return (
      isDialogOpen && (
        <Dialog title="Add Movie" onClose={handleDialogClose}>
          <MovieForm onSubmit={handleSubmit} />
        </Dialog>
      )
    );
  })
  .add('Edit Movie', () => {
    const [isDialogOpen, setIsDialogOpen] = useState(true);
    const handleDialogClose = () => {
      setIsDialogOpen(false);
    };
    const handleSubmit = movie => {
      console.log('Submitted movie:', movie);
      setIsDialogOpen(false);
    };

    const initialMovie = {
      title: 'Example Movie',
      genre: 'Action',
      rating: '5',
    };

    return (
      isDialogOpen && (
        <Dialog title="Edit Movie" onClose={handleDialogClose}>
          <MovieForm initialMovie={initialMovie} onSubmit={handleSubmit} />
        </Dialog>
      )
    );
  })
  .add('Delete Movie', () => {
    const [isDialogOpen, setIsDialogOpen] = useState(true);
    const handleDialogClose = () => {
      setIsDialogOpen(false);
    };

    const handleDelete = () => {
      console.log('Movie deleted');
      setIsDialogOpen(false);
    };

    const deleteMovieContent = (
      <div>
        <p>Are you sure you want to delete this movie?</p>
        <button onClick={handleDelete}>Yes, delete</button>
        <button onClick={handleDialogClose}>Cancel</button>
      </div>
    );

    return (
      isDialogOpen && (
        <Dialog title="Delete Movie" onClose={handleDialogClose}>
          {deleteMovieContent}
        </Dialog>
      )
    );
  });
