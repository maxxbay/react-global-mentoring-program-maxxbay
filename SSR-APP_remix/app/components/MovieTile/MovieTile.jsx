import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import ContextMenu from '../ContextMenu/ContextMenu';

import stylesUrl from '~/styles/MovieTile.css';

export function MovieTileLinks() {
  return <link rel="stylesheet" href={stylesUrl} />;
}

const MovieTile = ({ movie, onClick }) => {
  const navigate = useNavigate();

  const { title, release_date, genres, poster_path } = movie;
  const [showContextMenu, setShowContextMenu] = useState(false);

  const toggleContextMenu = e => {
    e.stopPropagation();
    setShowContextMenu(prevShowContextMenu => !prevShowContextMenu);
  };

  const handleEdit = () => {
    navigate(`/movies/${movie.id}/edit`, { state: { movie } });
  };

  const handleDelete = () => {
    console.log('Delete action for movie:', movie);
  };

  useEffect(() => {
    const handleClickOutside = e => {
      if (showContextMenu) {
        setShowContextMenu(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showContextMenu]);

  return (
    <Link to={`/movies/${movie.id}`} className="movie-tile">
      <button className="movie-tile__button">
        <img
          className="movie-tile__image"
          src={`https://image.tmdb.org/t/p/w185${poster_path}`}
          alt={title}
        />
        <div className="movie-tile__info">
          <h2 className="movie-tile__title">{title}</h2>
          <p className="movie-tile__year">{release_date}</p>
          <p className="movie-tile__genres">
            {genres ? genres.join(', ') : ''}
          </p>
          <p className="movie-tile__rating">Rating: {movie.vote_average}</p>
          <p className="movie-tile__duration">Duration: {movie.runtime} min</p>
          <p className="movie-tile__description">
            {movie.overview || 'No overview available.'}
          </p>
        </div>
      </button>

      <div className="movie-tile__context-menu-wrapper">
        <button
          className="movie-tile__context-menu-toggle"
          aria-label="context menu"
          onClick={toggleContextMenu}
        >
          &#x2026;
        </button>
        <ContextMenu
          show={showContextMenu}
          onClose={toggleContextMenu}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </Link>
  );
};
MovieTile.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    release_date: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    runtime: PropTypes.number,
    overview: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func,
};

export default MovieTile;
