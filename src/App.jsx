import React, { useState } from 'react';
import './App.scss';
import MovieForm from './components/MovieForm/MovieForm';
import MovieListPage from 'Pages/MovieList/MovieListPage';
import Dialog from './components/Dialog/Dialog';

const App = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleModal = () => {
    setIsDialogOpen(prev => !prev);
  };

  const handleSubmit = movie => {
    console.log('Submitted movie:', movie);
    setIsDialogOpen(false);
  };

  return (
    <>
      <main className="container">
        <MovieListPage />
      </main>
      {isDialogOpen && (
        <Dialog title="Add Movie" onClose={toggleModal}>
          <MovieForm onSubmit={handleSubmit} />
        </Dialog>
      )}
    </>
  );
};

export default App;
