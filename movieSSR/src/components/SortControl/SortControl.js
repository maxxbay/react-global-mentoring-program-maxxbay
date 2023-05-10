import React from "react";
import PropTypes from "prop-types";
import "../../../dist/components/SortControl/SortControl.css";

const SortControl = ({ sortCriterion, onSortCriterion }) => {
  const handleSortChange = ({ target: { value } }) => {
    onSortCriterion(value);
  };

  return (
    <div className="sort-control" data-testid="sort-control">
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
  onSortCriterion: PropTypes.func.isRequired,
};

export default SortControl;
