import Homepage from 'components/HomePage';
import Counter from 'pages/Task1/Counter';
import MovieList from 'pages/Task1/MovieList';
import SearchForm from 'pages/Task1/SearchForm';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Homepage />
        <Routes>
          <Route exact path="/counter" element={<Counter />} />
          <Route exact path="/search-form" element={<SearchForm />} />
          <Route exact path="/genre-search" element={<MovieList />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
