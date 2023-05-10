import React from 'react';
import MovieTile from '../components/MovieTile/MovieTile';

export default {
  title: 'Components/MovieTile',
  component: MovieTile,
};

const Template = args => <MovieTile {...args} />;

export const Default = Template.bind({});
Default.args = {
  movie: {
    title: 'Example Movie',
    release_date: '2022-01-01',
    genres: ['Action', 'Adventure'],
    poster_path: '/example-poster.jpg',
    vote_average: 8.5,
    runtime: 120,
    overview: 'This is an example movie for the MovieTile component.',
  },
  onClick: () => {},
};
