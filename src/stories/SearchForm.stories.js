import React from 'react';
import SearchForm from '../components/SearchForm/SearchForm';

export default {
  title: 'Components/SearchForm',
  component: SearchForm,
  argTypes: {
    onSearch: { action: 'onSearch' },
  },
};

const Template = args => <SearchForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  initialSearchQuery: '',
  onSearch: value => console.log('Searching for:', value),
};
