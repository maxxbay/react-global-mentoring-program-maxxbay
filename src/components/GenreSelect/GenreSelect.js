import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { genres } from '../MovieTile/genres';
import './GenreSelect.scss';

const GenreSelect = ({ selectedGenre, onSelect }) => {
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
GenreSelect.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string),
  selectedGenre: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};
export default GenreSelect;
