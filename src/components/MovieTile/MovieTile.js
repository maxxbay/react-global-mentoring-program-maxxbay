import React, { useState, useEffect } from 'react';
import './MovieTile.scss';
import ContextMenu from '../ContextMenu/ContextMenu';

const MovieTile = ({ movie, onClick }) => {
  const { title, release_date, genres, poster_path } = movie;
  const [showContextMenu, setShowContextMenu] = useState(false);

  const toggleContextMenu = e => {
    e.stopPropagation();
    setShowContextMenu(prevShowContextMenu => !prevShowContextMenu);
  };

  const handleEdit = () => {
    console.log('Edit action for movie:', movie);
  };

  const handleDelete = () => {
    console.log('Delete action for movie:', movie);
  };

  const handleTileClick = () => {
    if (typeof onClick === 'function') {
      onClick(movie);
    }
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
    <div className="movie-tile" onClick={handleTileClick}>
      <img
        className="movie-tile__image"
        src={`https://image.tmdb.org/t/p/w185${poster_path}`}
        alt={title}
      />
      <div className="movie-tile__info">
        <h2 className="movie-tile__title">{title}</h2>
        <p className="movie-tile__year">{release_date}</p>
        <p className="movie-tile__genres">{genres.join(', ')}</p>
        <p className="movie-tile__rating">Rating: {movie.vote_average}</p>
        <p className="movie-tile__duration">Duration: {movie.runtime} min</p>
        <p className="movie-tile__description">{movie.overview}</p>
      </div>
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
    </div>
  );
};

export default MovieTile;
