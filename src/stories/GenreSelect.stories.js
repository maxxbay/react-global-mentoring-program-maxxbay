import React from 'react';
import { storiesOf } from '@storybook/react';
import GenreSelect from '../components/GenreSelect/GenreSelect';

const genres = ['All', 'Action', 'Adventure', 'Comedy', 'Drama', 'Sci-Fi'];

storiesOf('GenreSelect', module)
  .add('Default', () => (
    <GenreSelect
      genres={genres}
      selectedGenre="All"
      onSelect={selected => console.log(selected)}
    />
  ))
  .add('Initial genre "Drama"', () => (
    <GenreSelect
      genres={genres}
      selectedGenre="Drama"
      onSelect={selected => console.log(selected)}
    />
  ));
