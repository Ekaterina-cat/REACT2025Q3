import { createPortal } from 'react-dom';

import { useModalWidget } from './hooks';
import { columnLabels, type ColumnKey } from './types';

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

  const toggleColumnVisibility = (columnKey: ColumnKey) => {
    setColVisibility((prev) => ({
      ...prev,
      [columnKey]: !prev[columnKey],
    }));
  };

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
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
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
              <h2 className="mb-4 text-lg font-bold">Select Columns</h2>
              <div className="max-h-96 space-y-2 overflow-y-auto">
                {Object.entries(colVisibility).map(([key, isVisible]) => (
                  <label key={key} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={isVisible}
                      onChange={() => toggleColumnVisibility(key as ColumnKey)}
                      className="mr-2"
                    />
                    {columnLabels[key as ColumnKey]}
                  </label>
                ))}
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="rounded bg-gray-300 px-4 py-2 hover:bg-gray-400"
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
