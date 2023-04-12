import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Dialog from '../components/Dialog/Dialog';
import MovieForm from '../components/MovieForm/MovieForm';

const AddMovieStory = args => {
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
      <Dialog title={args.title} onClose={handleDialogClose}>
        <MovieForm onSubmit={handleSubmit} />
      </Dialog>
    )
  );
};

AddMovieStory.argTypes = {
  title: { control: 'text' },
};

const EditMovieStory = args => {
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
      <Dialog title={args.title} onClose={handleDialogClose}>
        <MovieForm initialMovie={initialMovie} onSubmit={handleSubmit} />
      </Dialog>
    )
  );
};

EditMovieStory.argTypes = {
  title: { control: 'text' },
};

const DeleteMovieStory = args => {
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
      <Dialog title={args.title} onClose={handleDialogClose}>
        {deleteMovieContent}
      </Dialog>
    )
  );
};

DeleteMovieStory.argTypes = {
  title: { control: 'text' },
};

storiesOf('Dialog', module)
  .add('Add Movie', () => <AddMovieStory title="Add Movie" />)
  .add('Edit Movie', () => <EditMovieStory title="Edit Movie" />)
  .add('Delete Movie', () => <DeleteMovieStory title="Delete Movie" />);
