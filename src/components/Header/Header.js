import React from 'react';
import PropTypes from 'prop-types';
import NetflixLogo from 'components/Header/Logo/NetflixLogo';
import './Header.scss';
import SearchForm from '../SearchForm/SearchForm';

const Header = ({
  selectedMovie,
  onAddMovie,
  initialSearchQuery,
  onSearch,
  children,
}) => {
  const handleAddMovieClick = () => {
    if (typeof onAddMovie === 'function') {
      onAddMovie();
    }
  };

  return (
    <header
      className={`container header ${selectedMovie ? 'movie-selected' : ''}`}
    >
      <div className="header-container">
        <NetflixLogo />
        <div className="search-container">
          <SearchForm
            initialSearchQuery={initialSearchQuery}
            onSearch={onSearch}
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
  selectedMovie: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }),
  onAddMovie: PropTypes.func,
  initialSearchQuery: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Header;
