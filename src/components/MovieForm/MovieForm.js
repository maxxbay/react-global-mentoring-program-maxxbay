import React from 'react';
import './MovieForm.scss';
import Button from '../Button/Button';
import GenreSelect from '../GenreSelect/GenreSelect';
import { genres } from '../MovieTile/genres';

const MovieForm = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    if (typeof onSubmit === 'function') {
      onSubmit({
        title: formData.get('title'),
        releaseDate: formData.get('releaseDate'),
        movieUrl: formData.get('movieUrl'),
        rating: formData.get('rating'),
        genre: formData.get('genre'),
        runtime: formData.get('runtime'),
        overview: formData.get('overview'),
      });
    }

    form.reset();
  };

  const handleGenreSelect = selectedGenre => {
    console.log('Selected Genre: ', selectedGenre);
  };

  const handleReset = e => {
    e.preventDefault();
    e.target.form.reset();
  };

  return (
    <form className="movie-form" onSubmit={handleSubmit}>
      <div className="movie-form__row">
        <div className="movie-form__column">
          <div className="movie-form__field">
            <label htmlFor="title">Title</label>
            <input id="title" type="text" name="title" />
          </div>
          <div className="movie-form__field">
            <label htmlFor="movieUrl">Movie URL</label>
            <input
              id="movieUrl"
              type="url"
              name="movieUrl"
              placeholder="HTTPS://"
            />
          </div>
        </div>
        <div className="movie-form__column">
          <div className="movie-form__field">
            <label htmlFor="releaseDate">Release Date</label>
            <input
              id="releaseDate"
              type="date"
              name="releaseDate"
              placeholder="Select date"
            />
          </div>
          <div className="movie-form__field">
            <label htmlFor="rating">Rating</label>
            <input id="rating" type="text" name="rating" />
          </div>
        </div>
      </div>
      <div className="movie-form__row">
        <div className="movie-form__column">
          <div className="movie-form__field">
            <label htmlFor="genre">Genre</label>
            <GenreSelect genres={genres} onSelect={handleGenreSelect} />
          </div>
        </div>
        <div className="movie-form__column">
          <div className="movie-form__field">
            <label htmlFor="runtime">Runtime</label>
            <input
              id="runtime"
              type="text"
              name="runtime"
              placeholder="minutes"
            />
          </div>
        </div>
      </div>
      <div className="movie-form__row movie-form__row--full-width">
        <div className="movie-form__field">
          <label htmlFor="overview">Overview</label>
          <textarea id="overview" name="overview"></textarea>
        </div>
      </div>
      <div className="movie-form__actions">
        <Button type="button" onClick={handleReset}>
          RESET
        </Button>
        <Button type="submit">SUBMIT</Button>
      </div>
    </form>
  );
};

export default MovieForm;
