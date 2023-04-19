import React, { useState, useEffect, useCallback } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import GenreSelect from '../../components/GenreSelect/GenreSelect';
import SortControl from '../../components/SortControl/SortControl';
import MovieTile from '../../components/MovieTile/MovieTile';
import Header from 'components/Header/Header';
import Dialog from '../../components/Dialog/Dialog';
import MovieForm from '../../components/MovieForm/MovieForm';
import usePagination from '../../Hooks/usePagination';
import useFetch from '../../Hooks/useFetch';
import './MovieListPage.scss';

const MovieListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('query') || '';
  const sortCriterion = searchParams.get('sortBy') || '';
  const activeGenre = searchParams.get('genre') || '';

  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const itemsPerPage = 6;

  const {
    currentData,
    nextPage,
    prevPage,
    currentPage,
    maxPages,
    resetPagination,
  } = usePagination(movies, itemsPerPage);

  const url = 'http://localhost:4000/movies';
  const params = {
    sortBy: sortCriterion,
    sortOrder: 'desc',
    search: searchQuery,
    searchBy: 'title',
    filter: activeGenre,
    offset: (currentPage - 1) * itemsPerPage,
    limit: itemsPerPage + 100,
  };

  const { loading, error, data: fetchedMovies } = useFetch(url, params);

  useEffect(() => {
    setMovies(fetchedMovies);
  }, [fetchedMovies]);

  const handleMovieClick = useCallback(movie => {
    setSelectedMovie(prevSelectedMovie => {
      if (prevSelectedMovie && prevSelectedMovie.id === movie.id) {
        return null;
      } else {
        return movie;
      }
    });
  }, []);

  const handleBackClick = useCallback(() => {
    setSelectedMovie(null);
  }, []);

  const toggleModal = useCallback(() => {
    setIsDialogOpen(prev => !prev);
  }, []);

  const handleSubmit = useCallback(movie => {
    console.log('Submitted movie:', movie);
    setIsDialogOpen(false);
  }, []);

  const handleSearchQueryChange = useCallback(
    value => {
      setSearchParams({ query: value });
      resetPagination();
    },
    [setSearchParams, resetPagination]
  );

  const handleSortCriterionChange = useCallback(
    value => {
      setSearchParams({ sortBy: value });
    },
    [setSearchParams]
  );

  const handleActiveGenreChange = useCallback(
    value => {
      setSearchParams({ genre: value });
    },
    [setSearchParams]
  );

  return (
    <>
      {selectedMovie ? (
        <MovieDetails movie={selectedMovie} onClose={handleBackClick} />
      ) : (
        <Header
          selectedMovie={selectedMovie}
          onClose={handleBackClick}
          onAddMovie={toggleModal}
          initialSearchQuery={searchQuery}
          onSearch={handleSearchQueryChange}
        >
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
      )}
      <div className="movie-list-page">
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
      </div>
      {isDialogOpen && (
        <Dialog title="Add Movie" onClose={toggleModal}>
          <MovieForm onSubmit={handleSubmit} />
        </Dialog>
      )}
      <Outlet />
    </>
  );
};

export default MovieListPage;
