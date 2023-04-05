import React, { useState } from 'react';
import NetflixLogo from 'components/Header/Logo/NetflixLogo';
import './Header.scss';
import SearchForm from '../SearchForm/SearchForm';
import MovieDetails from 'components/MovieDetails/MovieDetails';

const Header = ({ selectedMovie }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = value => {
    setSearchValue(value);
  };

  return (
    <header
      className={`container header ${selectedMovie ? 'movie-selected' : ''}`}
    >
      <div className="header-container container">
        <NetflixLogo />
        <div className="add-button">
          <button className="add">+ Add movie</button>
        </div>
      </div>
      {selectedMovie ? (
        <MovieDetails movie={selectedMovie} />
      ) : (
        <div className="search-container">
          <SearchForm
            className="header-container container"
            initialSearchQuery={searchValue}
            onSearch={handleSearch}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
