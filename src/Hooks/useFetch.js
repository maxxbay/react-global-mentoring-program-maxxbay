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

  const postData = (url, data) => {
    const response = axios.post(url, data);
    return response;
  };

  const putData = (id, data) => {
    const transformedData = editMovieData(id, data);

    const response = axios.put(`${url}/${id}`, transformedData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response;
  };

  return { data, getData, post: postData, put: putData };
};

export default useFetch;
