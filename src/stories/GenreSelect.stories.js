import React from 'react';
import GenreSelect from '../components/GenreSelect/GenreSelect';

export default {
  title: 'Components/GenreSelect',
  component: GenreSelect,
};

const Template = args => <GenreSelect {...args} />;

export const Default = Template.bind({});
Default.args = {
  genres: ['All', 'Action', 'Adventure', 'Comedy', 'Drama'],
  selectedGenre: 'All',
  onSelect: () => {},
};
