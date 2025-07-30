import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

interface IThemeContext {
  isLight: boolean;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<IThemeContext | undefined>({
  isLight: false,
  toggleTheme: () => {},
});

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

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('context error');
  }

  return context;
};
