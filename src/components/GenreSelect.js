import React, { useState } from 'react';
import './GenreSelect.scss';

const GenreSelect = ({ genres, selectedGenre, onSelect }) => {
  const [genre, setGenre] = useState(selectedGenre);

  const handleGenreChange = e => {
    setGenre(e.target.value);
    onSelect(e.target.value);
  };
  return (
    <div className="genre-select">
      <select
        title="Genre"
        name="genre"
        onChange={handleGenreChange}
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
