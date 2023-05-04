import { useState, useCallback } from 'react';
import { editMovieData } from '../helpers';
import axios from 'axios';

const useFetch = url => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const getData = useCallback(async (url, params = {}) => {
    console.log('Infinite rendering', params);
    const source = axios.CancelToken.source();

    const response = await axios.get(url, {
      params: params,
      cancelToken: source.token,
    });

    setData(response.data.data || response.data);
    setLoading(false);
  }, []);

  const postData = (url, data) => {
    setLoading(true);
    const response = axios.post(url, data);
    setLoading(false);
    return response;
  };

  const putData = (id, data) => {
    setLoading(true);
    const transformedData = editMovieData(id, data);

    const response = axios.put(`${url}/${id}`, transformedData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setLoading(false);
    return response;
  };

  return { data, loading, getData, post: postData, put: putData };
};

export default useFetch;
