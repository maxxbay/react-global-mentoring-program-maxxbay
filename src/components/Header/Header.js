import React, { useState } from 'react';
import NetflixLogo from 'common/Logo/NetflixLogo';
import './Header.scss';
import SearchForm from 'components/SearchForm';
import GenreSelect from 'components/GenreSelect';

const Header = ({ genres, selectedGenre, onSelect }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = value => {
    setSearchValue(value);
  };

  return (
    <header className="header">
      <div className="header-container container">
        <NetflixLogo />
        <div className="add-button">
          <button className="add">+ Add movie</button>
        </div>
      </div>
      <SearchForm initialSearchQuery={searchValue} onSearch={handleSearch} />
      <GenreSelect
        genres={genres}
        selectedGenre={selectedGenre}
        onSelect={onSelect}
      />
    </header>
  );
};

export default Header;
