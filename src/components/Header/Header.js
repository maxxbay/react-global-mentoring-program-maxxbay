import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import NetflixLogo from 'components/Header/Logo/NetflixLogo';
import './Header.scss';
import SearchContext from '../../Pages/MovieList/SearchContext';
import { Outlet } from 'react-router';

const Header = ({ selectedMovie, onAddMovie, children }) => {
  const { searchQuery, handleSearchQueryChange } = useContext(SearchContext);

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
        <Outlet context={[searchQuery, handleSearchQueryChange]} />
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
  children: PropTypes.node,
};

export default Header;
