import React from 'react';
import SortControl from '../components/Main/SortControl/SortControl';

export default {
  title: 'Components/SortControl',
  component: SortControl,
  argTypes: {
    onSelectionChange: { action: 'onSelectionChange' },
  },
};

const Template = args => <SortControl {...args} />;

export const Default = Template.bind({});
Default.args = {
  currentSelection: 'releaseDate',
  onSelectionChange: option => console.log('Sorting by:', option),
};
