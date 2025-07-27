import type React from 'react';

const Spinner = (): React.JSX.Element => {
  return (
    <>
      <section className="flex justify-center items-center h-80">
        <div
          className="w-16 h-16 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"
          role="status"
          aria-label="Загрузка..."
        ></div>
      </section>
    </>
  );
};

export default Spinner;
