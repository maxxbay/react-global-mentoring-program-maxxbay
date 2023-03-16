import React, { useState } from 'react';
import './App.scss';
import GenreSelect from 'components/GenreSelect';
import Header from './components/Header/Header';
import { genres } from 'common/MovieArray/MovieArray';

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState(genres[0]);

  const handleGenreSelect = genre => {
    setSelectedGenre(genre);
  };
  return (
    <>
      <header className="header-content">
        <Header />
      </header>
      <main className="container">
        <GenreSelect
          genres={genres}
          selectedGenre={selectedGenre}
          onSelect={handleGenreSelect}
        />
      </main>
    </>
  );
};

export default App;
