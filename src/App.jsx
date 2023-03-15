import React from 'react';
import Counter from 'components/Counter';
import SearchForm from 'components/SearchForm';
import GenreSelect from 'components/GenreSelect';

function App() {
  const handleSearch = query => {
    console.log(`Searching for ${query}`);
  };

  const handleGenreSelect = genre => {
    console.log(`Selected genre: ${genre}`);
  };

  return React.createElement(
    'div',
    null,
    React.createElement(Counter, { initialValue: 0 }),
    React.createElement(SearchForm, {
      initialValue: 'Action',
      onSearch: handleSearch,
    }),
    React.createElement(GenreSelect, {
      genres: ['Action', 'Drama', 'Comedy', 'Adventure', 'Fantasy'],
      selected: 'Action',
      onSelect: handleGenreSelect,
    })
  );
}
export default App;
