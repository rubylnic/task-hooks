import { useState, useEffect, useRef } from 'react';

export default function useJsonFetch(url, opts) {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let response = await fetch(url, opts);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        setError(null)
      } catch (e) {
        setError(e)
      } finally {
        setLoading(false)
      }
    }
    fetchData();
  }, [])

  return [{ data, isLoading, hasError }];
}
