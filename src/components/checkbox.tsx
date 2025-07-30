import type React from 'react';
import { useState } from 'react';

const Checkbox = (): React.JSX.Element => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <div className="flex justify-center items-center text-white dark:text-black text-2xl">
        <label className="flex items-center">
          <input
            type="checkbox"
            className="w-6 h-6"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <span className="ml-2">
            {isChecked ? 'Pokemon Chosen' : 'Pokemon NOT Selected'}
          </span>
        </label>
      </div>
    </>
  );
};

export default Checkbox;
