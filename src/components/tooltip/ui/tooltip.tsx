import { STYLE_BUTTON } from '@utils/constants';
import { convertToCSV, downloadCSV } from '@utils/csv';
import type React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { resetCheckboxes } from '../../../app/store/checkbox-slice';
import type { DetailsRowCSV, RootState } from '../../../app/utils/types';
import { TooltipLogic } from '../lib/toolpip-logic';

interface TooltipProps {
  selectedCount: number;
}

const Tooltip = ({ selectedCount }: TooltipProps): React.JSX.Element => {
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
      keys.map((key) => TooltipLogic<DetailsRowCSV>(key))
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
