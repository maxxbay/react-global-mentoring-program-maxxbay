import { useState, useCallback } from 'react';
import { editMovieData } from '../helpers';
import axios from 'axios';

const useFetch = url => {
  const [data, setData] = useState();

  const getData = useCallback(async (url, params = {}) => {
    console.log('Infinite rendering', params);
    const source = axios.CancelToken.source();

    const response = await axios.get(url, {
      params: params,
      cancelToken: source.token,
    });

    setData(response.data.data || response.data);
  }, []);

  const postData = async (url, data) => {
    try {
      const response = await axios.post(url, data);
      if (response.status !== 201) {
        throw new Error('Error adding movie.');
      }
      return response;
    } catch (error) {
      console.error('Error adding movie:', error);
      console.error('Server response:', error.response);
      if (error.response && error.response.status === 400) {
        setErrorDialogOpen(true);
        setErrorMessage(response.data.messages.join(', '));
      } else {
        setErrorMessage(
          'An unexpected error occurred. Please try again later.'
        );
      }
      throw error;
    }
  };

  const putData = async (id, data) => {
    try {
      const transformedData = editMovieData(id, data);
      const response = await axios.put(`${url}/${id}`, transformedData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response;
    } catch (error) {
      console.error('Error updating movie:', error.response || error);
    }
  };

  return { data, getData, post: postData, put: putData };
};

export default useFetch;
