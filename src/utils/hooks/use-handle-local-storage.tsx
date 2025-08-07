import { useEffect, useState } from 'react';

const useHandleLocalStorage = (
  key: string,
  initialValue: string
): [string, (value: string) => void] => {
  const [valueLocalStorage, setValueLocalStorage] = useState(() => {
    return localStorage.getItem(key) ?? initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, valueLocalStorage);
  }, [key, valueLocalStorage]);

  return [valueLocalStorage, setValueLocalStorage];
};

export default useHandleLocalStorage;
