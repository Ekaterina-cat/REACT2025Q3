'use client';
import { type ReactNode, useEffect, useState } from 'react';

import { ThemeContext } from './use-theme';

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isLight, setIsLight] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('themeSPAisDark');
      if (savedTheme !== null) {
        setIsLight(JSON.parse(savedTheme));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('themeSPAisDark', JSON.stringify(isLight));
      document.documentElement.classList.toggle('dark', isLight);
    }
  }, [isLight]);

  const toggleTheme = (): void => {
    setIsLight((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isLight, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
