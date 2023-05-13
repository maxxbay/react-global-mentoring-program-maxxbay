import React, { useEffect } from 'react';
import { useParams, useNavigate, Outlet } from 'react-router-dom';
// import useFetch from '../../Hooks/useFetch';
// import MovieDetails from './movies.$movieId';
import { API_URL } from '../constants';
import { useLoaderData } from '@remix-run/react';
import axios from 'axios';

import stylesDetails from '~/styles/MovieDetailsWrapper.css';

export function MovieDetailsWrapperLinks() {
  return <link rel="stylesheet" href={stylesDetails} />;
}

const MovieDetailsWrapper = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();

  // const url = `${API_URL}/${movieId}`;
  // const { loading, error, data: movieData, getData } = useFetch();
  // const movie = Array.isArray(movieData) ? movieData[0] : movieData;

  // useEffect(() => {
  //   const abortController = new AbortController();

  //   getData(url, abortController.signal);
  //   return () => {
  //     abortController.abort();
  //   };
  // }, [url, getData]);

  // if (loading) {
  //   return <div className="movie-details">Loading...</div>;
  // }

  // if (error) {
  //   return <div className="movie-details">Error: {error}</div>;
  // }

  // if (!movie) {
  //   return <div className="movie-details">Movie not found</div>;
  // }

  return (
    <div className="movie-details-wrapper">
      {/* <MovieDetails
        movie={movie}
        onClose={handleMovieDetailsClose}
      /> */}
      <Outlet />
    </div>
  );
};

export default MovieDetailsWrapper;
