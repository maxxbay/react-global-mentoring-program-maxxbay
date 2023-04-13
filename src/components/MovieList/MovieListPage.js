import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieDetails from '../MovieDetails/MovieDetails';
import GenreSelect from '../GenreSelect/GenreSelect';
import SortControl from '../SortControl/SortControl';
import MovieTile from '../MovieTile/MovieTile';
import Header from 'components/Header/Header';
import Dialog from '../Dialog/Dialog';
import MovieForm from '../MovieForm/MovieForm';
import usePagination from './usePagination';
import './MovieListPage.scss';

const MovieListPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortCriterion, setSortCriterion] = useState('');
  const [activeGenre, setActiveGenre] = useState('');
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
    setCurrentPage,
  } = usePagination(movies, itemsPerPage);

  const resetPagination = () => {
    setCurrentPage(1);
  };

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:4000/movies', {
          params: {
            sortBy: sortCriterion,
            sortOrder: 'desc',
            search: searchQuery,
            searchBy: 'title',
            filter: activeGenre,
            offset: 0,
            limit: 1000,
          },
          cancelToken: source.token,
        });

        setMovies(response.data.data);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Request canceled', error.message);
        } else {
          console.error(error);
        }
      }
    };

    fetchMovies();

    return () => {
      source.cancel('Operation canceled by the user.');
    };
  }, [searchQuery, sortCriterion, activeGenre]);

  const handleMovieClick = movie => {
    setSelectedMovie(prevSelectedMovie => {
      if (prevSelectedMovie === movie) {
        return null;
      } else {
        return movie;
      }
    });
  };
  const handleBackClick = () => {
    setSelectedMovie(null);
  };
  const toggleModal = () => {
    setIsDialogOpen(prev => !prev);
  };

  const handleSubmit = movie => {
    console.log('Submitted movie:', movie);
    setIsDialogOpen(false);
  };

  return (
    <>
      {selectedMovie ? (
        <MovieDetails movie={selectedMovie} onBackClick={handleBackClick} />
      ) : (
        <Header
          onAddMovie={toggleModal}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        >
          <div className="genre-sort-controls">
            <GenreSelect
              selectedGenre={activeGenre}
              onSelect={setActiveGenre}
            />
            <SortControl
              sortCriterion={sortCriterion}
              setSortCriterion={setSortCriterion}
            />
          </div>
        </Header>
      )}
      <div className="movie-list-page">
        <div className="movie-list">
          {currentData().map(movie => (
            <MovieTile
              key={movie.id}
              movie={movie}
              onClick={() => handleMovieClick(movie)}
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
    </>
  );
};

export default MovieListPage;
