import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './SearchForm.scss';

const SearchForm = ({ searchQuery, setSearchQuery, resetPagination }) => {
  const [value, setValue] = useState(searchQuery);

  const handleForm = event => {
    event.preventDefault();
    setSearchQuery(value);
    resetPagination();
  };

  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };

  return (
    <div className="search">
      <h1 className="search-title">Find your movie</h1>
      <form onSubmit={handleForm}>
        <input
          type="text"
          placeholder="What do you want to watch?"
          value={value}
          onChange={handleChange}
        />
        <Button type="submit">search</Button>
      </form>
    </div>
  );
};

SearchForm.propTypes = {
  searchQuery: PropTypes.string,
  setSearchQuery: PropTypes.func.isRequired,
  resetPagination: PropTypes.func.isRequired,
};

export default SearchForm;
