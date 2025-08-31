import { TableDataCo2 } from '@components/table-data-co2';

import './App.css';

function App() {
  return (
    <>
      <h1 className="font-courgette my-8 bg-gradient-to-r from-green-600 to-blue-500 bg-clip-text text-center text-4xl font-bold text-transparent">
        Welcome to the environmental data analytics platform!
      </h1>
      <TableDataCo2 />
    </>
  );
}

export default App;
