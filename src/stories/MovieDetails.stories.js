import React from 'react';
import MovieDetails from '../components/MovieDetails/MovieDetails';

export default {
  title: 'Components/MovieDetails',
  component: MovieDetails,
};

const Template = args => <MovieDetails {...args} />;

export const Default = Template.bind({});
Default.args = {
  movie: {
    title: 'Example Movie',
    release_date: '2022-01-01',
    genres: ['Action', 'Adventure'],
    poster_path: '/example-poster.jpg',
    vote_average: 8.5,
    runtime: 120,
    overview: 'This is an example movie for the MovieDetails component.',
  },
};
