import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { genres } from '../MovieTile/genres';
import './GenreSelect.scss';

const GenreSelect = ({ value, onSelect }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleGenreChange = event => {
    onSelect(event);
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
        title="Genres"
        name="genres"
        onChange={handleGenreChange}
        value={value}
      >
        <option value="All">All</option>

        {genres.map(genres => (
          <option value={genres} key={genres}>
            {genres}
          </option>
        ))}
      </select>
    </div>
  );
};
GenreSelect.propTypes = {
  // genres: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
};

export default GenreSelect;
