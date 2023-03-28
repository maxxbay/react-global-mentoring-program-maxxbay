import React from 'react';
import { storiesOf } from '@storybook/react';
import SortControl from '../components/Main/SortControl/SortControl';

storiesOf('SortControl', module).add('default', () => (
  <SortControl currentSelection="title" onSelectionChange={() => {}} />
));
