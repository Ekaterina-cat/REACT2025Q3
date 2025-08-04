import type React from 'react';

import { useTheme } from '../shared';
const ButtonSwitchTheme = (): React.JSX.Element => {
  const { isLight, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded bg-white text-black dark:bg-primary-8 dark:text-white"
    >
      {isLight ? 'Switch To Dark Theme' : 'Switch To Light Theme'}
    </button>
  );
};

export default ButtonSwitchTheme;
