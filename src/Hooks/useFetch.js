import { useState, useCallback } from 'react';
import { editMovieData } from '../helpers';
import axios from 'axios';

const useFetch = (url, setErrorDialogOpen, setErrorMessage) => {
  const [data, setData] = useState();

  const getData = useCallback(async (url, params = {}) => {
    console.log('Infinite rendering', params);
    const abortController = new AbortController();
    const signal = abortController.signal;

    try {
      const response = await axios.get(url, {
        params: params,
        signal: signal,
      });

      setData(response.data.data || response.data);
    } catch (error) {
      if (error.name === 'AbortError') {
        console.log('Request canceled:', error.message);
      } else {
        console.error('Error fetching data:', error);
      }
      throw error;
    } finally {
      abortController.abort();
    }
    return abortController;
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
      const response = await axios.put(`${url}`, transformedData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status !== 200) {
        throw new Error('Error updating movie.');
      }

      return response;
    } catch (error) {
      console.error('Error updating movie:', error);
      console.error('Server response:', error.response);
      if (error.response) {
        if (error.response.status === 400) {
          setErrorDialogOpen(true);
          setErrorMessage(error.response.data.messages.join(', '));
        } else if (error.response.status === 404) {
          setErrorDialogOpen(true);
          setErrorMessage('Movie not found.');
        } else {
          setErrorMessage(
            'An unexpected error occurred. Please try again later.'
          );
        }
      } else {
        setErrorMessage(
          'An unexpected error occurred. Please try again later.'
        );
      }
      throw error;
    }
  };

  return { data, getData, post: postData, put: putData };
};

export default useFetch;
