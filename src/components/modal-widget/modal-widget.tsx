import { nameColunms } from '@utils/constants';
import { useCallback, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { twMerge } from 'tailwind-merge';

import { useModalWidget } from './hooks';
import { type ColumnKey } from './types';

interface ModalWidgetProps {
  colVisibility: Record<ColumnKey, boolean>;
  setColVisibility: React.Dispatch<
    React.SetStateAction<Record<ColumnKey, boolean>>
  >;
}

export const ModalWidget = ({
  colVisibility,
  setColVisibility,
}: ModalWidgetProps) => {
  const { isModalOpen, setIsModalOpen, modalRef } = useModalWidget();

  const toggleColumnVisibility = useCallback(
    (columnKey: ColumnKey) => {
      setColVisibility((prev) => ({
        ...prev,
        [columnKey]: !prev[columnKey],
      }));
    },
    [setColVisibility]
  );

  const checkboxes = useMemo(
    () =>
      Object.entries(colVisibility).map(([key, isVisible]) => (
        <label key={key} className="flex items-center">
          <input
            type="checkbox"
            checked={isVisible}
            onChange={() => toggleColumnVisibility(key as ColumnKey)}
            className="mr-2"
          />
          {nameColunms[key as ColumnKey]}
        </label>
      )),
    [colVisibility, toggleColumnVisibility]
  );

  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) {
    console.error('Modal root element not found');
    return null;
  }

  return (
    <>
      <div className="mb-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className={twMerge(
            'font-borel cursor-pointer rounded',
            'bg-gradient-to-r from-green-600 to-blue-500',
            'px-4 py-2 pt-4',
            'text-white',
            'hover:bg-blue-600'
          )}
        >
          Customize Columns
        </button>
      </div>
      {isModalOpen &&
        createPortal(
          <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black">
            <div
              ref={modalRef}
              className="w-96 rounded-lg bg-white p-6 shadow-lg"
            >
              <h2 className="font-borel mb-4 text-4xl">Select Columns</h2>
              <div className="font-courgette max-h-96 space-y-2 overflow-y-auto">
                {checkboxes}
              </div>
              <div className="font-courgette mt-4 flex justify-end">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className={twMerge(
                    'font-borel cursor-pointer rounded',
                    'bg-gray-300 bg-gradient-to-r from-green-600 to-blue-500',
                    'px-4 py-2 pt-4',
                    'text-2xl',
                    'hover:bg-gray-400'
                  )}
                >
                  Close
                </button>
              </div>
            </div>
          </div>,
          modalRoot
        )}
    </>
  );
};
