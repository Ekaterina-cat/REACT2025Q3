import { useTheme } from '@utils/context';
import type React from 'react';

const ButtonSwitchTheme = (): React.JSX.Element => {
  const { isLight, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded bg-white text-black dark:bg-primary-800 dark:text-white"
    >
      {isLight ? 'Switch To Dark Theme' : 'Switch To Light Theme'}
    </button>
  );
};

export default ButtonSwitchTheme;
