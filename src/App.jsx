import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import moviesData from './components/MovieTile/movies.json';
import { genres } from './components/MovieTile/genres';
import GenreSelect from './components/GenreSelect/GenreSelect';
import MovieTile from 'components/MovieTile/MovieTile';
import SortControl from 'components/SortControl/SortControl';
import MovieForm from './components/MovieForm/MovieForm';
import Dialog from './components/Dialog/Dialog';

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [sortOption, setSortOption] = useState('release_date');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleGenreSelect = genre => {
    setSelectedGenre(genre);
  };

  const handleMovieClick = movie => {
    if (selectedMovie && selectedMovie.id === movie.id) {
      setSelectedMovie(null);
    } else {
      setSelectedMovie(movie);
    }
  };

  const handleSortChange = option => {
    setSortOption(option);
  };

  const handleAddMovieClick = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
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
      if (sortOption === 'title') {
        return a.title.localeCompare(b.title);
      } else {
        return new Date(b.release_date) - new Date(a.release_date);
      }
    })
    .slice(0, 6);

  return (
    <>
      <Header
        selectedMovie={selectedMovie}
        onAddMovie={handleAddMovieClick} // fixed prop name here
      />
      <main className="container">
        <div className="controls">
          <GenreSelect
            genres={['All', ...genres]}
            selectedGenre={selectedGenre}
            onSelect={handleGenreSelect}
          />
          <SortControl
            currentSelection={sortOption}
            onSelectionChange={handleSortChange}
          />
        </div>
        <div className="movie-list marg">
          {sortedMovies.map(movie => (
            <MovieTile
              key={movie.id}
              movie={movie}
              onClick={handleMovieClick}
            />
          ))}
        </div>
      </main>
      {isDialogOpen && (
        <Dialog title="Add Movie" onClose={handleDialogClose}>
          <MovieForm onSubmit={handleSubmit} />
        </Dialog>
      )}
    </>
  );
};

export default App;
