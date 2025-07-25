import { useEffect, useState } from 'react';

interface LoadingState {
  isLoading: boolean;
}

export const useLoading = (initState: boolean = true): LoadingState => {
  const [isLoading, setIsLoading] = useState(initState);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return { isLoading };
};

export default useLoading;
