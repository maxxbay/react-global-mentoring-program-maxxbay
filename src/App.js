import React from 'react';
import {
  HashRouter as Router,
  Route,
  Routes,
  Redirect,
} from 'react-router-dom';
import './App.scss';
import MovieListPage from './Pages/MovieList/MovieListPage';
import MovieDetailsWrapper from '../src/components/MovieDetailsWrapper/MovieDetailsWrapper';
import SearchForm from '../src/components/SearchForm/SearchForm';
import AddMovieForm from '../src/components/MovieForm/AddMovieForm';
import EditMovieForm from '../src/components/MovieForm/EditMovieForm';

const App = () => {
  console.log('Start');

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MovieListPage />}>
            <Route path="/" element={<SearchForm />}>
              <Route path="new" element={<AddMovieForm />} />
              <Route path="/movies/:movieId/edit" element={<EditMovieForm />} />
            </Route>
            <Route path="movies/:movieId" element={<MovieDetailsWrapper />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
