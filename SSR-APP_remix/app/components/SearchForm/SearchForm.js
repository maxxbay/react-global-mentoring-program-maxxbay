import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import SearchContext from '../../Pages/MovieList/SearchContext';
import Button from '../Button/Button';
import { Outlet } from 'react-router-dom';
import './SearchForm.scss';

const SearchForm = ({ initialSearchQuery }) => {
  const [value, setValue] = useState(initialSearchQuery || '');
  const { searchQuery, handleSearchQueryChange } = useContext(SearchContext);

  const handleForm = event => {
    event.preventDefault();

    if (value.trim() === '') {
      handleSearchQueryChange('');
    } else {
      handleSearchQueryChange(value);
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
      <Outlet />
    </div>
  );
};

SearchForm.propTypes = {
  initialSearchQuery: PropTypes.string,
};

export default SearchForm;
