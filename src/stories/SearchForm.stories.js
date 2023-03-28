import React from 'react';
import { storiesOf } from '@storybook/react';
import SearchForm from '../components/SearchForm/SearchForm';

storiesOf('SearchForm', module)
  .add('Default', () => (
    <SearchForm onSearch={searchQuery => console.log(searchQuery)} />
  ))
  .add('Initial value "Star Wars"', () => (
    <SearchForm
      initialSearchQuery="Star Wars"
      onSearch={searchQuery => console.log(searchQuery)}
    />
  ));
