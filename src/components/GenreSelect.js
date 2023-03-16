import React, { useState } from 'react';
import './GenreSelect.scss';

const GenreSelect = ({ genres, selectedGenre, onSelect }) => {
  const [genre, setGenre] = useState(selectedGenre);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleGenreChange = e => {
    setGenre(e.target.value);
    onSelect(e.target.value);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      className={`genre-select ${isDropdownOpen ? 'open' : ''}`}
      onClick={toggleDropdown}
    >
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
