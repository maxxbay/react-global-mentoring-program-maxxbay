import { Form } from '@remix-run/react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import { Outlet } from 'react-router-dom';

import styleForm from '~/styles/SearchForm.css';

export function StyleFormLinks() {
  return <link rel="stylesheet" href={styleForm} />;
}

export async function action({ request }) {
  let formData = await request.formData();
  const movieName = formData.get('movieName');

  return movieName;
}

const SearchForm = ({ initialSearchQuery }) => {
  return (
    <div className="search">
      <h1 className="search-title">Find your movie</h1>
      <Form method="get">
        <input
          type="text"
          name="query"
          autoComplete="off"
          placeholder="What do you want to watch?"
        />
        <Button type="submit">search</Button>
      </Form>
      <Outlet />
    </div>
  );
};

SearchForm.propTypes = {
  initialSearchQuery: PropTypes.string,
};

export default SearchForm;
