import React, { useState } from 'react';
import './App.scss';
import GenreSelect from 'components/GenreSelect';
import Header from './components/Header/Header';

const App = () => {
  const genres = [
    'ALL',
    'Action',
    'Adventure',
    'Comedy',
    'Drama',
    'Horror',
    'Sci-Fi',
  ];
  const [, setSearchValue] = useState('');

  const handleGenreSelect = selectedGenre => {
    console.log('Selected genre:', selectedGenre);
  };

  return (
    <>
      <header className="header-content">
        <Header setSearchValue={setSearchValue} />
      </header>
      <main className="container">
        <GenreSelect
          genres={genres}
          selectedGenre={genres[0]}
          onSelect={handleGenreSelect}
        />
      </main>
    </>
  );
};

export default App;
