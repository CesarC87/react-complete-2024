import React, { useEffect, useState } from 'react'

const useFetch = (fetchFx) => {

    const [fetchedData, setFetchedData] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [errorFetch, setErrorFetch] = useState();

    useEffect(() => {
        async function fetchData() {
          setIsFetching(true);
          try {
            const places = await fetchFx();
            setFetchedData(places);
          } catch (error) {
            setErrorFetch({ message: error.message || 'Failed to fetch user places.' });
          }
    
          setIsFetching(false);
        }
    
        fetchData();
      }, [fetchFx]);

  return {
    fetchedData,
    isFetching,
    errorFetch,
    setFetchedData,
    setErrorFetch,
    setIsFetching
  }
}

export default useFetch