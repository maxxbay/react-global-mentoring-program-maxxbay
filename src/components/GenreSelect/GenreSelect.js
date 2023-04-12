import React, { useState } from 'react';
import './GenreSelect.scss';

const GenreSelect = ({ genres = [], selectedGenre, onSelect }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleGenreChange = ({ target: { value } }) => {
    onSelect(value);
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
        value={selectedGenre}
      >
        <option value="All">All</option>

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
