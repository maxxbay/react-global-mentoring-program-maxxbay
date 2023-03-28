import React, { useState } from 'react';
import './SortControl.scss';

const SortControl = ({ currentSelection, onSelectionChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSelectionChange = event => {
    const { value } = event.target;

    if (typeof onSelectionChange === 'function') {
      onSelectionChange(value);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      data-testid="sort-control"
      className={`sort-control ${isDropdownOpen ? 'open' : ''}`}
      onClick={toggleDropdown}
    >
      <label className="sort-control__label" htmlFor="sort-by">
        SORT BY
      </label>
      <select
        className="sort-control__select"
        id="sort-by"
        value={currentSelection}
        onChange={handleSelectionChange}
      >
        <option value="">Select an option</option>
        <option value="releaseDate">Release Date</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
};

export default SortControl;
