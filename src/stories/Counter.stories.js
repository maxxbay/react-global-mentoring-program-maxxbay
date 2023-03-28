import React from 'react';
import { storiesOf } from '@storybook/react';
import Counter from '../components/Counter/Counter';

storiesOf('Counter', module)
  .add('Default', () => <Counter />)
  .add('Initial value 5', () => <Counter initialValue={5} />);
