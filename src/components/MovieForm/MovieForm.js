import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './MovieForm.scss';
import Button from '../Button/Button';
import GenreSelect from '../GenreSelect/GenreSelect';
import { useForm, Controller } from 'react-hook-form';
import { genres } from '../MovieTile/genres';

const MovieForm = ({ onSubmit, movie, onReset }) => {
  const defaultValues = {
    id: '',
    title: '',
    tagline: '',
    vote_average: '',
    vote_count: '',
    release_date: '',
    poster_path: '',
    overview: '',
    budget: '',
    revenue: '',
    runtime: '',
    genres: 'All',
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues: { ...defaultValues, ...movie } });

  useEffect(() => {
    reset(movie);
  }, [movie, reset]);

  const rules = {
    title: { required: true },
    poster_path: { required: true },
    release_date: { required: true },
    rating: { required: true },
    vote_average: { required: true, min: 0 },
    runtime: { required: true, min: 0 },
    genres: { required: true },
    overview: { required: true },
  };

  const onSubmitHandler = data => {
    if (typeof onSubmit === 'function') {
      onSubmit(data);
    }
  };

  const handleReset = e => {
    e.preventDefault();
    reset({ ...defaultValues });
    if (typeof onReset === 'function') {
      onReset();
    }
  };

  return (
    <form className="movie-form" onSubmit={handleSubmit(onSubmitHandler)}>
      <div className="movie-form__row">
        <div className="movie-form__column">
          <div className="movie-form__field">
            <label htmlFor="title">Title</label>
            <Controller
              name="title"
              control={control}
              rules={rules.title}
              render={({ field }) => (
                <input id="title" type="text" {...field} />
              )}
            />
            {!!errors.title && <p>Title is required</p>}
          </div>
          <div className="movie-form__field">
            <label htmlFor="poster_path">Movie URL</label>
            <Controller
              name="poster_path"
              control={control}
              rules={rules.poster_path}
              render={({ field }) => (
                <input
                  id="poster_path"
                  type="text"
                  name="poster_path"
                  placeholder="Enter URL of poster image"
                  {...field}
                />
              )}
            />
            {!!errors.poster_path && <p>Poster Path is required</p>}
          </div>
        </div>
        <div className="movie-form__column">
          <div className="movie-form__field">
            <label htmlFor="releaseDate">Release Date</label>
            <Controller
              name="release_date"
              control={control}
              rules={rules.release_date}
              render={({ field }) => (
                <input
                  id="release_date"
                  type="date"
                  name="release_date"
                  placeholder="Select date"
                  {...field}
                />
              )}
            />
            {!!errors.release_date && <p>Release Date is required</p>}
          </div>

          <div className="movie-form__field">
            <label htmlFor="rating">Rating</label>
            <Controller
              name="vote_average"
              control={control}
              rules={rules.vote_average}
              render={({ field }) => (
                <input
                  id="vote_average"
                  type="text"
                  name="vote_average"
                  {...field}
                />
              )}
            />
            {!!errors.vote_average && (
              <p>Rating is required and should be more than 0</p>
            )}
          </div>
        </div>
      </div>
      <div className="movie-form__row">
        <div className="movie-form__column">
          <div className="movie-form__field">
            <label id="genre-label" htmlFor="genres">
              Genre
            </label>
            <Controller
              name="genres"
              control={control}
              defaultValue={defaultValues.genres || 'All'}
              render={({ field }) => (
                <GenreSelect
                  genres={genres}
                  onSelect={field.onChange}
                  value={field.value.toString()}
                />
              )}
            />
            {!!errors.genres && <p>Genre is required</p>}
          </div>
        </div>
        <div className="movie-form__column">
          <div className="movie-form__field">
            <label htmlFor="runtime">Runtime</label>
            <Controller
              name="runtime"
              control={control}
              rules={rules.runtime}
              render={({ field }) => (
                <input
                  id="runtime"
                  type="number"
                  name="runtime"
                  placeholder="minutes"
                  {...field}
                />
              )}
            />
          </div>
        </div>
      </div>
      <div className="movie-form__row movie-form__row--full-width">
        <div className="movie-form__field">
          <label htmlFor="overview">Overview</label>
          <Controller
            name="overview"
            control={control}
            rules={rules.overview}
            render={({ field }) => (
              <textarea
                id="overview"
                name="overview"
                placeholder="Enter a brief overview of the movie"
                {...field}
              />
            )}
          />
          {!!errors.overview && <p>Overview is required</p>}
        </div>
      </div>
      <div className="movie-form__actions">
        <Button
          type="button"
          onClick={e => {
            handleReset(e);
            if (typeof onReset === 'function') {
              onReset(reset);
            }
          }}
        >
          RESET
        </Button>
        <Button type="submit">SUBMIT</Button>
      </div>
    </form>
  );
};
MovieForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onReset: PropTypes.func,
  movie: PropTypes.object,
};
export default MovieForm;
