import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import MovieListPage from 'Pages/MovieList/MovieListPage';

const App = () => {
  return (
    <>
      <Router>
        <main className="container">
          <Routes>
            <Route path="/" element={<MovieListPage />} />
          </Routes>
        </main>
      </Router>
    </>
  );
};

export default App;
