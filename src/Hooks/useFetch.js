import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useFetch = () => {
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

  const postData = async data => {
    setLoading(true);
    try {
      const response = await axios.post(url, data);
      setLoading(false);
      return response;
    } catch (error) {
      setError(error.message);
      setLoading(false);
      throw error;
    }
  };

  const putData = async (id, data) => {
    setLoading(true);
    try {
      const response = await axios.put(
        `${url}`,
        { ...data, id },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setLoading(false);
      return response;
    } catch (error) {
      setError(error.message);
      setLoading(false);
      throw error;
    }
  };

  return { data, loading, error, getData, post: postData, put: putData };
};

export default useFetch;
