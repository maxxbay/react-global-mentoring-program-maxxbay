import React, { useState } from 'react';
import './App.scss';
import MovieListPage from 'Pages/MovieList/MovieListPage';

const App = () => {
  return (
    <>
      <main className="container">
        <MovieListPage />
      </main>
    </>
  );
};

export default App;
