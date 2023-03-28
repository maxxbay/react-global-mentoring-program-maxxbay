import React from 'react';
import { storiesOf } from '@storybook/react';
import MovieTile from '../components/Main/MovieTile/MovieTile';
import moviesData from '../common/MoviesLibrary/movies.json';

storiesOf('MovieTile', module).add('default', () => (
  <MovieTile movie={moviesData[0]} onClick={() => {}} />
));
