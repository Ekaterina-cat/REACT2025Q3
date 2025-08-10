import { BodyPageLogic, Button, CardList, Input } from '@components/';
import type React from 'react';

const BodyPage = (): React.JSX.Element => {
  const { searchText, handleInputChange, handleSearch, filteredPokemons } =
    BodyPageLogic();

  return (
    <>
      <section className="m-auto w-4/5">
        <div className="flex flex-row justify-end gap-4 mb-10">
          <Input value={searchText} onChange={handleInputChange} />
          <Button onClick={handleSearch} />
        </div>
        <div>
          <CardList pokemons={filteredPokemons} />
        </div>
      </section>
    </>
  );
};

export default BodyPage;
