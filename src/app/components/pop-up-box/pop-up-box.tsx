import Image from 'next/image';
import type React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { resetCheckboxes } from '../../store/checkbox-slice';
import { STYLE_BUTTON } from '../../utils/constants/constants';
import { convertToCSV, downloadCSV } from '../../utils/csv';
import { RootState } from '../../utils/types';

interface TooltipProps {
  selectedCount: number;
}

const PopUpBox = ({ selectedCount }: TooltipProps): React.JSX.Element => {
  const dataForSaved = useSelector(
    (state: RootState) => state.checkbox.checkboxes
  );
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(resetCheckboxes());
  };
  const handleClickSave = async () => {
    const keys = Object.keys(dataForSaved);
    const fields = [
      'name',
      'id',
      'height',
      'weight',
      'location_area_encounters',
    ];

    const allData = await Promise.all(
      keys.map(async (key) => {
        const response = await fetch(key);
        return response.ok ? await response.json() : null;
      })
    );

    const filteredData = allData.filter(
      (data) => data !== undefined && data !== null
    );

    if (filteredData.length > 0) {
      const csv = convertToCSV(filteredData, fields);
      downloadCSV(csv, `${selectedCount}`);
    }
  };
  return (
    <>
      <section className="fixed bottom-5 w-1/4 bg-primary-700 dark:bg-white dark:border-black dark:border-2">
        <p className="text-center text-white dark:text-black">
          Selected Items: {selectedCount}
        </p>
        <div className="flex flex-row justify-between p-6 gap-3.5">
          <button onClick={handleClick} className={STYLE_BUTTON}>
            Unselect all
          </button>
          <button onClick={handleClickSave} className={STYLE_BUTTON}>
            <Image
              src="icon-save.png"
              alt="icon-save"
              className="invert dark:invert-0"
              width={20}
              height={20}
            />
          </button>
        </div>
      </section>
    </>
  );
};

export default PopUpBox;
