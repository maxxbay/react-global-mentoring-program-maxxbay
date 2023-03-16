import React, { useState, useCallback } from 'react';
import Button from './Button/Button';
import './SearchForm.scss';

const SearchForm = ({ initialSearchQuery, onSearch }) => {
  const [value, setValue] = useState(initialSearchQuery);

  const handleForm = useCallback(
    event => {
      event.preventDefault();
      if (typeof onSearch === 'function') {
        onSearch(value);
      }
    },
    [value, onSearch]
  );
  const handleChange = useCallback(({ target: { value } }) => {
    setValue(value);
  }, []);

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

export default SearchForm;
