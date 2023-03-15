import React from 'react';

import './MovieList.scss';
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';
import MovieFilters from './MovieFilters';

// import { useState, useEffect } from 'react';
import movies from './movies.json';
// import axios from 'axios';

const MoviesList = () => {
  const navigate = useNavigate();

  // const [movie, setMovie] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       'D:GitHub/react-global-mentoring-program-maxxbay/src/pages/Task1/movies.json'
  //     )
  //     .then(res => setMovie(res.data))
  //     .catch(err => console.log(err));
  // }, []);

  return (
    <>
      <Button onClick={() => navigate('/')}>Go Back</Button>
      <MovieFilters />
      <div className="movies-list">
        {movies.map(movie => (
          <div className="movies-list">
            <p>
              Film {movie.Title} genre {movie.Genre}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default MoviesList;
