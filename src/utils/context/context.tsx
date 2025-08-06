import { type ReactNode, useEffect, useState } from 'react';

import { ThemeContext } from './use-theme';

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isLight, setIsLight] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('themeSPAisDark');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    localStorage.setItem('themeSPAisDark', JSON.stringify(isLight));
    document.documentElement.classList.toggle('dark', isLight);
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
