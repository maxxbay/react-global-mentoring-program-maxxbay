import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './SearchForm.scss';

const SearchForm = ({ initialSearchQuery, onSearch }) => {
  const [value, setValue] = useState(initialSearchQuery);

  const handleForm = event => {
    event.preventDefault();
    if (typeof onSearch === 'function') {
      onSearch(value);
    }
  };

  return (
    <div className="search">
      <h1 className="search-title">Find your movie</h1>
      <form onSubmit={handleForm}>
        <input
          type="text"
          placeholder="What do you want to watch?"
          value={value}
          onChange={({ target: { value } }) => setValue(value)}
        />
        <Button type="submit">search</Button>
      </form>
    </div>
  );
};

SearchForm.propTypes = {
  initialSearchQuery: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
};

export default SearchForm;
