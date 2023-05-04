import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import GenreSelect from '../../components/GenreSelect/GenreSelect';
import SortControl from '../../components/SortControl/SortControl';
import MovieTile from '../../components/MovieTile/MovieTile';
import Header from 'components/Header/Header';
import Dialog from '../../components/Dialog/Dialog';
import MovieForm from '../../components/MovieForm/MovieForm';
import usePagination from '../../Hooks/usePagination';
import useFetch from '../../Hooks/useFetch';
import SearchContext from './SearchContext';
import { API_URL } from '../../constants';
import './MovieListPage.scss';

const MovieListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('query') || '';
  const sortCriterion = searchParams.get('sortBy') || '';
  const activeGenre = searchParams.get('genre') || '';

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const sortOrder = sortCriterion === 'title' ? 'asc' : 'desc';

  const itemsPerPage = 6;
  const url = API_URL;
  const navigate = useNavigate();

  const { loading, error, data: fetchedMovies, getData } = useFetch();

  const {
    currentData,
    nextPage,
    prevPage,
    currentPage,
    maxPages,
    resetPagination,
  } = usePagination(fetchedMovies, itemsPerPage);

  const params = {
    sortBy: sortCriterion,
    sortOrder: sortOrder,
    search: searchQuery,
    searchBy: 'title',
    filter: activeGenre,
    offset: (currentPage - 1) * itemsPerPage,
    limit: itemsPerPage + 100,
  };

  useEffect(() => {
    getData(url, params);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortCriterion, searchQuery, activeGenre]);

  const handleMovieClick = movie => {
    navigate(`/movies/${movie.id}`, {
      state: { searchParams: searchParams.toString() },
    });
  };

  const toggleModal = () => {
    setIsDialogOpen(prev => !prev);
  };

  const handleSubmit = movie => {
    console.log('Submitted movie:', movie);
    setIsDialogOpen(false);
  };

  const handleSearchQueryChange = value => {
    setSearchParams(new URLSearchParams({ ...searchParams, query: value }));
    resetPagination();
  };

  const handleSortCriterionChange = value => {
    setSearchParams(prev => {
      const newParams = new URLSearchParams(prev);
      newParams.set('sortBy', value);
      return newParams;
    });
  };

  const handleActiveGenreChange = ({ target: { value } }) => {
    setSearchParams(prev => {
      const newParams = new URLSearchParams(prev);
      newParams.set('genre', value);
      return newParams;
    });
  };

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        handleSearchQueryChange,
      }}
    >
      <>
        <Header onAddMovie={toggleModal} initialSearchQuery={searchQuery}>
          <div className="genre-sort-controls">
            <GenreSelect
              selectedGenre={activeGenre}
              onSelect={handleActiveGenreChange}
            />
            <SortControl
              sortCriterion={sortCriterion}
              onSortCriterion={handleSortCriterionChange}
            />
          </div>
        </Header>

        <main className="container">
          <div className="movie-list">
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            {currentData()
              .slice(0, itemsPerPage)
              .map(movie => (
                <MovieTile
                  key={movie.id}
                  movie={movie}
                  onClick={handleMovieClick}
                />
              ))}
          </div>
          <div className="pagination">
            <button onClick={prevPage} disabled={currentPage === 1}>
              Previous
            </button>
            <span>
              Page {currentPage} of {maxPages}
            </span>
            <button onClick={nextPage} disabled={currentPage === maxPages}>
              Next
            </button>
          </div>
        </main>
        {isDialogOpen && (
          <Dialog title="Add Movie" onClose={toggleModal}>
            <MovieForm onSubmit={handleSubmit} />
          </Dialog>
        )}
      </>
    </SearchContext.Provider>
  );
};

export default MovieListPage;
