import { Links, LiveReload, Outlet } from '@remix-run/react';
import { HeaderLinks } from './components/Header/Header';
import { MovieListPageLinks, StylesGlobalLinks } from './routes/_index';
import { GenreSelectLinks } from './components/GenreSelect/GenreSelect';
import { SortControlLinks } from './components/SortControl/SortControl';
import { MovieTileLinks } from './components/MovieTile/MovieTile';
import { DialogLinks } from './components/Dialog/Dialog';
import { MovieFromLinks } from './components/MovieForm/MovieForm';
import { ButtonLinks } from './components/Button/Button';
import { LogoLinks } from './components/Header/Logo/NetflixLogo.jsx';
import { MovieDetailsLinks } from './routes/movies.$movieId';
import { StyleFormLinks } from './components/SearchForm/SearchForm';

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Remix: So great, it's funny!</title>
        <Links />
        <StylesGlobalLinks />
        <MovieListPageLinks />
        <HeaderLinks />
        <StyleFormLinks />
        <GenreSelectLinks />
        <SortControlLinks />
        <MovieTileLinks />
        <DialogLinks />
        <MovieFromLinks />
        <ButtonLinks />
        <MovieDetailsLinks />
        <LogoLinks />
      </head>
      <body>
        <Outlet />
        <LiveReload />
      </body>
    </html>
  );
}
