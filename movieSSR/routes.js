import React from "react";
import MovieListPage from "./src/Pages/MovieList/MovieListPage";
import MovieDetailsWrapper from "./src/components/MovieDetailsWrapper/MovieDetailsWrapper";
import SearchForm from "./src/components/SearchForm/SearchForm";
import AddMovieForm from "./src/components/MovieForm/AddMovieForm";
import EditMovieForm from "./src/components/MovieForm/EditMovieForm";

export default [
  {
    path: "/",
    element: (
      <>
        <MovieListPage />
        <SearchForm />
      </>
    ),
  },
  {
    path: "new",
    element: <AddMovieForm />,
  },
  {
    path: "/movies/:movieId/edit",
    element: <EditMovieForm />,
  },
  {
    path: "movies/:movieId",
    element: <MovieDetailsWrapper />,
  },
];
