import React, { useState } from 'react';
import NetflixLogo from 'common/Logo/NetflixLogo';
import './Header.scss';
import SearchForm from '../SearchForm/SearchForm';
import MovieDetails from 'components/Main/MovieDetails/MovieDetails';

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
        <SearchForm
          className="header-container container"
          initialSearchQuery={searchValue}
          onSearch={handleSearch}
        />
      )}
    </header>
  );
};

export default Header;
