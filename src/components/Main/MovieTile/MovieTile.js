import React, { useState } from 'react';
import './MovieTile.scss';

const MovieTile = ({ movie, onClick, onEdit, onDelete }) => {
  const { title, release_date, genres, poster_path } = movie;
  const [showContextMenu, setShowContextMenu] = useState(false);

  const toggleContextMenu = () => {
    setShowContextMenu(!showContextMenu);
  };

  const handleTileClick = () => {
    if (typeof onClick === 'function') {
      onClick(movie);
    }
  };

  const handleEdit = () => {
    if (typeof onEdit === 'function') {
      onEdit(movie);
    }
  };

  const handleDelete = () => {
    if (typeof onDelete === 'function') {
      onDelete(movie);
    }
  };

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
      <button
        className="movie-tile__context-menu-toggle"
        onClick={toggleContextMenu}
      >
        &#x2026;
      </button>
      {showContextMenu && (
        <div className="movie-tile__context-menu">
          <button
            className="movie-tile__context-menu-item"
            onClick={handleEdit}
          >
            Edit
          </button>
          <button
            className="movie-tile__context-menu-item"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default MovieTile;
