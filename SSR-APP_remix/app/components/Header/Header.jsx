import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import NetflixLogo from './Logo/NetflixLogo.jsx';
import SearchContext from '../../routes/SearchContext';
import { Outlet } from 'react-router';
import { useNavigate } from 'react-router-dom';

import stylesUrl from '~/styles/Header.css';

export function HeaderLinks() {
  return <link rel="stylesheet" href={stylesUrl} />;
}

const Header = ({ selectedMovie, onAddMovie, children }) => {
  const { searchQuery, handleSearchQueryChange } = useContext(SearchContext);
  const navigate = useNavigate();

  const handleAddMovieClick = () => {
    navigate('/new');
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
