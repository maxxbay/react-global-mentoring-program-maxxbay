import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import MovieListPage from 'Pages/MovieList/MovieListPage';
import MovieDetailsWrapper from 'components/MovieDetailsWrapper/MovieDetailsWrapper';

const App = () => {
  return (
    <>
      <Router>
        <main className="container">
          <Routes>
            <Route path="/" element={<MovieListPage />}>
              <Route path=":movieId" element={<MovieDetailsWrapper />} />
            </Route>
          </Routes>
        </main>
      </Router>
    </>
  );
};

export default App;
