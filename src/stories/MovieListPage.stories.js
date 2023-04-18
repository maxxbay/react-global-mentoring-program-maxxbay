import React from 'react';
import { action } from '@storybook/addon-actions';
import MovieListPage from '../Pages/MovieList/MovieListPage';

export default {
  title: 'MovieListPage',
  component: MovieListPage,
};

export const Default = () => <MovieListPage />;

export const WithSelectedMovie = () => (
  <MovieListPage
    selectedMovie={{
      id: '1',
      title: 'Inception',
      release_date: '2010-07-14',
      genres: ['Action', 'Adventure', 'Sci-Fi'],
      overview:
        'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
      runtime: 148,
      vote_average: 8.8,
      tagline: 'The dream is real.',
      poster_path:
        'https://image.tmdb.org/t/p/w500//9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
    }}
  />
);

export const WithError = () => (
  <MovieListPage error="Error fetching movies. Please try again later." />
);

export const Loading = () => <MovieListPage loading />;

export const WithPagination = () => (
  <MovieListPage
    movies={[
      {
        id: '1',
        title: 'Inception',
        release_date: '2010-07-14',
        genres: ['Action', 'Adventure', 'Sci-Fi'],
        overview:
          'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
        runtime: 148,
        vote_average: 8.8,
        tagline: 'The dream is real.',
        poster_path:
          'https://image.tmdb.org/t/p/w500//9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
      },
      {
        id: '2',
        title: 'Interstellar',
        release_date: '2014-11-05',
        genres: ['Adventure', 'Drama', 'Sci-Fi'],
        overview:
          "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        runtime: 169,
        vote_average: 8.6,
        tagline: 'Mankind was born on Earth. It was never meant to die here.',
        poster_path:
          'https://image.tmdb.org/t/p/w500//gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
      },
      {
        id: '3',
        title: 'The Dark Knight',
        release_date: '2008-07-18',
        genres: ['Action', 'Crime', 'Drama', 'Thriller'],
        overview:
          'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
        runtime: 152,
        vote_average: 9,
        tagline: 'Why So Serious?',
        poster_path:
          'https://image.tmdb.org/t/p/w500//1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg',
      },
      {
        id: '4',
        title: 'The Shawshank Redemption',
        release_date: '1994-09-23',
        genres: ['Drama', 'Crime'],
        overview:
          'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        runtime: 142,
        vote_average: 8.7,
        tagline: 'Fear can hold you prisoner. Hope can set you free.',
        poster_path:
          'https://image.tmdb.org/t/p/w500//9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg',
      },
      {
        id: '5',
        title: 'The Godfather',
        release_date: '1972-03-14',
        genres: ['Drama', 'Crime'],
        overview:
          "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
        runtime: 175,
        vote_average: 8.7,
        tagline: "An offer you can't refuse.",
        poster_path:
          'https://image.tmdb.org/t/p/w500//3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
      },
      {
        id: '6',
        title: 'The Godfather: Part II',
        release_date: '1974-12-20',
        genres: ['Drama', 'Crime'],
        overview:
          'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.',
        runtime: 202,
        vote_average: 8.6,
        tagline:
          "I don't feel I have to wipe everybody out, Tom. Just my enemies.",
        poster_path:
          'https://image.tmdb.org/t/p/w500//heJYtOrFYzvadkT38P2XmZKI8aK.jpg',
      },
      {
        id: '7',
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        release_date: '2001-12-18',
        genres: ['Action', 'Adventure', 'Drama', 'Fantasy'],
        overview:
          'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
        runtime: 178,
        vote_average: 8.8,
        tagline: 'One ring to rule them all',
        poster_path:
          'https://image.tmdb.org/t/p/w500//56zTpe2xvaA4alU51sRWPoKPYZy.jpg',
      },
      {
        id: '8',
        title: 'Forrest Gump',
        release_date: '1994-07-06',
        genres: ['Comedy', 'Drama', 'Romance'],
        overview:
          'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.',
        runtime: 142,
        vote_average: 8.5,
        tagline:
          "The world will never be the same, once you've seen it through the eyes of Forrest Gump.",
        poster_path:
          'https://image.tmdb.org/t/p/w500//yE5d3BUhE8hCnkMUJOo1QDoOGNz.jpg',
      },
    ]}
    itemsPerPage={3}
    onMovieClick={action('Movie clicked')}
    onBackClick={action('Back button clicked')}
  />
);
