import { useEffect } from 'react';
import { fetchData } from '../libs/apis';
import { useQuery } from 'react-query';

const useData = (key, staleTime = 1000 * 5 *60) => {
  const { data, error, isError, isLoading} = useQuery(key, fetchData, { staleTime });


  useEffect(() => {
    if(isError) {
      return 'error occurred.'
    }
  },[isError, error])
  return { data, isLoading };
}

export default useData;
