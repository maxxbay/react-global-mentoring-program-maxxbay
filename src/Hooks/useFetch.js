import { useState, useCallback } from 'react';
import { editMovieData } from '../helpers';
import axios from 'axios';

const useFetch = url => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const getData = useCallback(async (url, params = {}) => {
    console.log('Infinite rendering', params);
    const source = axios.CancelToken.source();
    try {
      const response = await axios.get(url, {
        params: params,
        cancelToken: source.token,
      });

      setData(response.data.data || response.data);
      setLoading(false);
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Request canceled', error.message);
      } else {
        setError(error.message);
      }
      setLoading(false);
    }
  }, []);

  const postData = async (url, data) => {
    setLoading(true);
    const response = await axios.post(url, data);
    setLoading(false);
    return response;
  };

  const putData = async (id, data) => {
    setLoading(true);
    const transformedData = editMovieData(id, data);

    const response = await axios.put(`${url}/${id}`, transformedData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setLoading(false);
    return response;
  };

  return { data, loading, error, getData, post: postData, put: putData };
};

export default useFetch;
