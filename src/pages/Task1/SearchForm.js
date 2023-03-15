import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';
import './SearchForm.scss';
import { Button } from './Button';

const SearchForm = ({ setSearchValue }) => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

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
    <div className="search">
      <h1 className="search-title">Find your movie</h1>
      <form onSubmit={handleForm}>
        <input
          type="text"
          placeholder="What do you want to watch?"
          value={value}
          onChange={handleChange}
        />
        <Button>search</Button>
      </form>
      <div className="search-button">
        <Button onClick={() => navigate('/')}>Go Back</Button>
      </div>
    </div>
  );
};

SearchForm.propTypes = {
  setSearchValue: PropTypes.func,
};

export default SearchForm;
