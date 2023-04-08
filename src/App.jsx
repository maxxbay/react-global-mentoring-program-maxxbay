import React, { useState } from 'react';
import './App.scss';
import { genres } from './components/MovieTile/genres';
import Header from './components/Header/Header';
import moviesData from './components/MovieTile/movies.json';
import GenreSelect from './components/GenreSelect/GenreSelect';
import SortControl from 'components/SortControl/SortControl';
import MovieForm from './components/MovieForm/MovieForm';
import Dialog from './components/Dialog/Dialog';
import MovieList from './components/MovieList/MovieList';

export const RELEASE_DATE = 'release_date';
export const TITLE = 'title';

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [sortOption, setSortOption] = useState(RELEASE_DATE);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleGenreSelect = genre => {
    setSelectedGenre(genre);
  };

  const handleMovieClick = movie => {
    setSelectedMovie(selectedMovie?.id === movie.id ? null : movie);
  };

  const handleSortChange = option => {
    setSortOption(option);
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
      <Header selectedMovie={selectedMovie} onAddMovie={toggleModal} />
      <main className="container">
        <div className="controls">
          <GenreSelect
            genres={genres}
            selectedGenre={selectedGenre}
            onSelect={handleGenreSelect}
          />
          <SortControl
            currentSelection={sortOption}
            onSelectionChange={handleSortChange}
          />
        </div>
        <MovieList movies={sortedMovies} onMovieClick={handleMovieClick} />
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
