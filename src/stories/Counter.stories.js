import React from 'react';
import Counter from '../components/Counter/Counter';

export default {
  title: 'Components/Counter',
  component: Counter,
};

const Template = args => <Counter {...args} />;

export const Default = Template.bind({});
Default.args = {
  count: 0,
  onIncrement: () => {},
  onDecrement: () => {},
};
