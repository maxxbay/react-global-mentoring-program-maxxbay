import React from 'react';

import './MovieList.scss';

// import { useState, useEffect } from 'react';
import movies from './movies.json';
// import axios from 'axios';

const MoviesList = () => {
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
      <div className="movies-list">
        {movies.map(movie => (
          <div className="movies-list" key={movie.imdbID}>
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
