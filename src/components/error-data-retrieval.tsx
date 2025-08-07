import type React from 'react';
import { twMerge } from 'tailwind-merge';

const ErrorDataRetrieval = (): React.JSX.Element => {
  return (
    <>
      <section className="flex justify-center items-center h-screen">
        <div
          className={twMerge(
            'border border-white text-white p-4 uppercase font-bold text-4xl',
            'dark:border-black dark:text-black'
          )}
        >
          Error description
        </div>
      </section>
    </>
  );
};

export default ErrorDataRetrieval;
