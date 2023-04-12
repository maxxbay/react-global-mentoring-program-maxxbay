import React from 'react';
import PropTypes from 'prop-types';
import './SortControl.scss';

const SortControl = ({ sortCriterion, setSortCriterion }) => {
  const handleSortChange = ({ target: { value } }) => {
    setSortCriterion(value);
  };

  return (
    <div className="sort-control">
      <label htmlFor="sort-by" className="sort-control__label">
        SORT BY:
      </label>
      <select
        className="sort-control__select"
        name="sort-by"
        id="sort-by"
        onChange={handleSortChange}
        value={sortCriterion}
      >
        <option value="release_date">RELEASE DATE</option>
        <option value="title">TITLE</option>
      </select>
    </div>
  );
};

SortControl.propTypes = {
  sortCriterion: PropTypes.string.isRequired,
  setSortCriterion: PropTypes.func.isRequired,
};

export default SortControl;
