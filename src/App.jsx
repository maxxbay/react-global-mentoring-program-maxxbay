import React from 'react';
import './App.scss';
import Counter from 'components/Counter';
import SearchForm from 'components/SearchForm';
import GenreSelect from 'components/GenreSelect';

const App = () => {
  const genres = ['Action', 'Adventure', 'Comedy', 'Drama', 'Horror', 'Sci-Fi'];

  const handleSearch = searchQuery => {
    console.log('Search:', searchQuery);
  };

  const handleGenreSelect = selectedGenre => {
    console.log('Selected genre:', selectedGenre);
  };

  return (
    <div className="app">
      <Counter initialValue={10} />
      <SearchForm initialSearchQuery="Movie" onSearch={handleSearch} />
      <GenreSelect
        genres={genres}
        selectedGenre={genres[0]}
        onSelect={handleGenreSelect}
      />
    </div>
  );
};

export default App;
