'use client';
import type { RootState } from '@utils/types';
import type React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toggleCheckbox } from '../../store/checkbox-slice';

interface CheckboxProps {
  id: string;
}

const Checkbox = ({ id }: CheckboxProps) => {
  const isChecked = useSelector(
    (state: RootState) => state.checkbox.checkboxes[id] ?? false
  );
  const dispatch = useDispatch();

  const handleCheckboxChange = () => {
    dispatch(toggleCheckbox(id));
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
