import { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';

const useFetch = (url, params = {}) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const paramsRef = useRef(params);
  useEffect(() => {
    if (JSON.stringify(paramsRef.current) !== JSON.stringify(params)) {
      paramsRef.current = params;
    }
  }, [params]);

  const getData = useCallback(async () => {
    console.log('getData called with params:', params);
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

    return () => {
      source.cancel('Operation canceled by the user.');
    };
    // eslint-disable-next-line
  }, [url]);

  useEffect(() => {
    getData();
  }, [getData]);

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

  return { data, loading, error, get: getData, post: postData, put: putData };
};

export default useFetch;
