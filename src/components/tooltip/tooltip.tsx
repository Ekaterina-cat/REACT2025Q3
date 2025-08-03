import type React from 'react';

interface TooltipProps {
  selectedCount: number;
}

import { STYLE_BUTTON } from '../../constants';
const Tooltip = ({ selectedCount }: TooltipProps): React.JSX.Element => {
  return (
    <>
      <section className="fixed bottom-5 w-1/4 bg-primary-6 dark:bg-white dark:border-black dark:border-2">
        <p className="text-center text-white dark:text-black">
          Selected Items: {selectedCount}
        </p>
        <div className="flex flex-row justify-between p-6 gap-3.5">
          <button className={STYLE_BUTTON}>Unselect all</button>
          <button className={STYLE_BUTTON}>
            <img
              src="icon-save.png"
              alt="icon-save"
              className="invert dark:invert-0"
            />
          </button>
        </div>
      </section>
    </>
  );
};

export default Tooltip;
