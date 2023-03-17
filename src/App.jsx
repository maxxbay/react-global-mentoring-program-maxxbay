import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import { genres } from 'common/MovieArray/MovieArray';
import GenreSelect from 'components/GenreSelect';

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState(genres[0]);

  const handleGenreSelect = genre => {
    setSelectedGenre(genre);
  };
  return (
    <>
      <Header />
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
