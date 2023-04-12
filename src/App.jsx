import React, { useState } from 'react';
import './App.scss';
import moviesData from './components/MovieTile/movies.json';
import MovieForm from './components/MovieForm/MovieForm';
import MovieListPage from 'components/MovieList/MovieListPage';
import Dialog from './components/Dialog/Dialog';

export const RELEASE_DATE = 'release_date';
export const TITLE = 'title';

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [sortOption, setSortOption] = useState(RELEASE_DATE);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleMovieClick = movie => {
    setSelectedMovie(selectedMovie?.id === movie.id ? null : movie);
  };

  const toggleModal = () => {
    setIsDialogOpen(prev => !prev);
  };

  const handleSubmit = movie => {
    console.log('Submitted movie:', movie);
    setIsDialogOpen(false);
  };

  const filteredMovies = moviesData.filter(movie =>
    selectedGenre === 'All' ? true : movie.genres.includes(selectedGenre)
  );

  const sortedMovies = filteredMovies
    .sort((a, b) => {
      if (sortOption === TITLE) {
        return a.title.localeCompare(b.title);
      } else {
        return new Date(b.release_date) - new Date(a.release_date);
      }
    })
    .slice(0, 6);

  return (
    <>
      <main className="container">
        <MovieListPage movies={sortedMovies} onMovieClick={handleMovieClick} />
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
