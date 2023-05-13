import React, { useState, useContext } from 'react';
import { useLoaderData, Form } from '@remix-run/react';
import axios from 'axios';
import PropTypes from 'prop-types';
import SearchContext from '../../routes/SearchContext';
import Button from '../Button/Button';
import { Outlet } from 'react-router-dom';
import { API_URL } from '../../constants';

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
