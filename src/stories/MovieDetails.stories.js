import React from 'react';
import { storiesOf } from '@storybook/react';
import MovieDetails from '../components/Main/MovieDetails/MovieDetails';
import moviesData from '../common/MoviesLibrary/movies.json';

storiesOf('MovieDetails', module).add('default', () => (
  <MovieDetails movie={moviesData[0]} />
));
