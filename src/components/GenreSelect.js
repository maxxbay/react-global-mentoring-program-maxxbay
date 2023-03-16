import React, { useState, useCallback } from 'react';
import './GenreSelect.scss';

const GenreSelect = ({ genres }) => {
  const [genre, setGenre] = useState('');

  // console.log(genres);
  return (
    <div className="genre-select">
      <select
        title="Genre"
        name="genre"
        onChange={e => setGenre(e.target.value)}
        value={genre}
      >
        {genres.map(genre => (
          <option value={genre} key={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenreSelect;
