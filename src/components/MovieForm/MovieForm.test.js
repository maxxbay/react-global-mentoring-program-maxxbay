import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import MovieForm from './MovieForm';

describe('MovieForm', () => {
  test('renders all form fields', () => {
    const onSubmit = jest.fn();
    render(<MovieForm onSubmit={onSubmit} />);
    expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/movie url/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/release date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/rating/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/runtime/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/overview/i)).toBeInTheDocument();
    expect(screen.getByText(/reset/i)).toBeInTheDocument();
    expect(screen.getByText(/submit/i)).toBeInTheDocument();
  });
});
