import React, { useState, useCallback } from 'react';
import ButtonSearch from './Button/Button';
import './SearchForm.scss';

const SearchForm = ({ setSearchValue }) => {
  const [value, setValue] = useState('');

  const handleForm = useCallback(
    event => {
      event.preventDefault();
      setSearchValue(value);
    },
    [value, setSearchValue]
  );

  const handleChange = useCallback(({ target: { value } }) => {
    setValue(value);
  }, []);

  return (
    <div className="search" onSubmit={handleForm}>
      <h1 className="search-title">Find your movie</h1>
      <form onSubmit={handleForm}>
        <input
          type="text"
          placeholder="What do you want to watch?"
          value={value}
          onChange={handleChange}
        />
        <ButtonSearch>search</ButtonSearch>
      </form>
    </div>
  );
};

export default SearchForm;
