import React from 'react';

import PropTypes from 'prop-types';
import './SearchForm.scss';
import { Button } from './Button';

const SearchForm = ({ setSearchValue }) => {
  return (
    <div className="search">
      <h1 className="search-title">Find your movie</h1>
      <form>
        <input type="text" placeholder="What do you want to watch today?" />
        <Button>search</Button>
      </form>
      <div className="search-button">
        <Button>Go Back</Button>
      </div>
    </div>
  );
};

SearchForm.propTypes = {
  setSearchValue: PropTypes.func,
};

export default SearchForm;
