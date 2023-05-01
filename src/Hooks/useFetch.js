import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url, params = {}) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const stringifiedParams = JSON.stringify(params);

  useEffect(() => {
    console.log('useEffect called with params:', params);
    const source = axios.CancelToken.source();
    const fetchData = async () => {
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
    };

    fetchData();

    return () => {
      source.cancel('Operation canceled by the user.');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, stringifiedParams]);

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

  return { data, loading, error, post: postData, put: putData };
};

export default useFetch;
