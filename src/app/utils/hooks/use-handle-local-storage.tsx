import { useEffect, useState } from 'react';

const useHandleLocalStorage = (
  key: string,
  initialValue: string
): [string, (value: string) => void] => {
  const [valueLocalStorage, setValueLocalStorage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(key) ?? initialValue;
    }
    return initialValue;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, valueLocalStorage);
    }
  }, [key, valueLocalStorage]);

  return [valueLocalStorage, setValueLocalStorage];
};

export default useHandleLocalStorage;
