import React from 'react';
import PropTypes from 'prop-types';
import NetflixLogo from 'components/Header/Logo/NetflixLogo';
import './Header.scss';
import SearchForm from '../SearchForm/SearchForm';

const Header = ({
  selectedMovie,
  onAddMovie,
  searchQuery,
  setSearchQuery,
  resetPagination,
  children,
}) => {
  const handleAddMovieClick = () => {
    if (typeof onAddMovie === 'function') {
      onAddMovie();
    }
  };

  const handleSearchSubmit = value => {
    setSearchQuery(value);
    resetPagination();
  };

  return (
    <header
      className={`container header ${selectedMovie ? 'movie-selected' : ''}`}
    >
      <div className="header-container">
        <NetflixLogo />
        <div className="search-container">
          <SearchForm
            searchQuery={searchQuery}
            setSearchQuery={handleSearchSubmit}
            resetPagination={resetPagination}
          />
        </div>
        <div className="add-button">
          <button className="add" onClick={handleAddMovieClick}>
            + Add movie
          </button>
        </div>
      </div>
      {children}
    </header>
  );
};

Header.propTypes = {
  selectedMovie: PropTypes.object,
  onAddMovie: PropTypes.func,
  searchQuery: PropTypes.string,
  setSearchQuery: PropTypes.func.isRequired,
  children: PropTypes.node,
  resetPagination: PropTypes.func,
};

export default Header;
