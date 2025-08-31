import { Spinner } from '@components/spinner';

import './App.css';
import { TableDataCo2 } from '@components/table-data-co2';
import { Suspense } from 'react';
import { twMerge } from 'tailwind-merge';

function App() {
  return (
    <>
      <h1
        className={twMerge(
          'font-courgette my-8',
          'bg-gradient-to-r from-green-600 to-blue-500 bg-clip-text',
          'text-center text-4xl font-bold text-transparent'
        )}
      >
        Welcome to the environmental data analytics platform!
      </h1>
      <Suspense fallback={<Spinner />}>
        <TableDataCo2 />
      </Suspense>
    </>
  );
}

export default App;
