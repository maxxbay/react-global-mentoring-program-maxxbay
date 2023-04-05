import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Counter from './Counter';

describe('Counter', () => {
  test('renders initial value provided in props', () => {
    render(<Counter initialValue={5} />);
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  test('a click event on "decrement" button decrements the displayed value', () => {
    render(<Counter initialValue={5} />);
    const decrementButton = screen.getByText('-');
    fireEvent.click(decrementButton);
    expect(screen.getByText('4')).toBeInTheDocument();
  });

  test('a click event on "increment" button increments the displayed value', () => {
    render(<Counter initialValue={5} />);
    const incrementButton = screen.getByText('+');
    fireEvent.click(incrementButton);
    expect(screen.getByText('6')).toBeInTheDocument();
  });
});
