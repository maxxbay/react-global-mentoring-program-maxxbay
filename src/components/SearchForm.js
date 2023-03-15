import React, { useState } from 'react';
import './SearchForm.scss';

const SearchForm = ({ initialSearchQuery = '', onSearch }) => {
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);

  const handleSearch = event => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form className="search-form" onSubmit={handleSearch}>
      <input
        type="text"
        className="search-input"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
