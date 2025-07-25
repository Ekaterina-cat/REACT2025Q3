import type React from 'react';

import { Button, CardList, Input } from '../';
import MainLogic from './main-logic';

const Main = (): React.JSX.Element => {
  const { searchText, handleInputChange, handleSearch, filteredPokemons } =
    MainLogic();

  return (
    <>
      <main className="m-auto">
        <div className="flex flex-row justify-end gap-4 mb-10">
          <Input value={searchText} onChange={handleInputChange} />
          <Button onClick={handleSearch} />
        </div>
        <div>
          <CardList pokemons={filteredPokemons} />
        </div>
      </main>
    </>
  );
};

export default Main;
