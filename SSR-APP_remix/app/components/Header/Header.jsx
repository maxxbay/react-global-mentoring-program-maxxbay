import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import NetflixLogo from './Logo/NetflixLogo.jsx';
import SearchContext from '../../routes/SearchContext';
import { Outlet, Route, Routes } from 'react-router';
import { useNavigate, useParams } from 'react-router-dom';
// import MovieDetailsWrapper from '../MovieDetailsWrapper/MovieDetailsWrapper.jsx';
// import MovieDetails from '../MovieDetails/MovieDetails.jsx';
// import MovieDetails from '~/routes/movies.jsx';
import SearchForm from '../SearchForm/SearchForm.jsx';

import stylesUrl from '~/styles/Header.css';

export function HeaderLinks() {
  return <link rel="stylesheet" href={stylesUrl} />;
}

const Header = ({ selectedMovie, onAddMovie, children }) => {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const { searchQuery, handleSearchQueryChange } = useContext(SearchContext);

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
        <SearchForm />
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
