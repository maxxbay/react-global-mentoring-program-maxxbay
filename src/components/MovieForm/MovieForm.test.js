import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import MovieForm from './MovieForm';

describe('MovieForm', () => {
  test('renders all form fields', () => {
    const onSubmit = jest.fn();
    render(<MovieForm onSubmit={onSubmit} />);
    expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/genre/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/rating/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /add movie/i })
    ).toBeInTheDocument();
  });

  test('submits form data when Add Movie button is clicked', () => {
    const onSubmit = jest.fn();
    render(<MovieForm onSubmit={onSubmit} />);
    fireEvent.change(screen.getByLabelText(/title/i), {
      target: { value: 'Test Movie' },
    });
    fireEvent.change(screen.getByLabelText(/genre/i), {
      target: { value: 'Action' },
    });
    fireEvent.change(screen.getByLabelText(/rating/i), {
      target: { value: '4' },
    });
    fireEvent.click(screen.getByRole('button', { name: /add movie/i }));
    expect(onSubmit).toHaveBeenCalledWith({
      title: 'Test Movie',
      genre: 'Action',
      rating: '4',
    });
  });
});
