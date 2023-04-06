// MovieForm.js

import React, { useState } from 'react';
import './MovieForm.scss';
import Button from '../Button/Button';

const MovieForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({ title, genre, rating });

    setTitle('');
    setGenre('');
    setRating('');
  };

  return (
    <form className="movie-form" onSubmit={handleSubmit}>
      <div className="movie-form__field">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <div className="movie-form__field">
        <label htmlFor="genre">Genre</label>
        <input
          id="genre"
          type="text"
          value={genre}
          onChange={e => setGenre(e.target.value)}
        />
      </div>
      <div className="movie-form__field">
        <label htmlFor="rating">Rating</label>
        <select
          id="rating"
          value={rating}
          onChange={e => setRating(e.target.value)}
        >
          <option value="">Choose a rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <Button type="submit">Add Movie</Button>
    </form>
  );
};

export default MovieForm;
