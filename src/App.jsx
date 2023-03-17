import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import { genres } from 'common/MovieArray/MovieArray';

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState(genres[0]);

  const handleGenreSelect = genre => {
    setSelectedGenre(genre);
  };
  return (
    <>
      <Header
        genres={genres}
        selectedGenre={selectedGenre}
        onSelect={handleGenreSelect}
      />
      <main className="container"></main>
    </>
  );
};

export default App;
