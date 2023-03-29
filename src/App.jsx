import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import moviesData from './components/assets/movies.json';
import { genres } from './components/assets/configmovie';
import GenreSelect from './components/GenreSelect/GenreSelect';
import { MovieTile, SortControl } from './components/Main';

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [sortOption, setSortOption] = useState('release_date');

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
      <Header selectedMovie={selectedMovie} />
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
    </>
  );
};

export default App;
