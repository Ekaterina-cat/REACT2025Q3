import { Search } from '@pages/index';
import { render } from '@testing-library/react';
import { ROUTE_PATH } from '@utils/routers';
import { MemoryRouter } from 'react-router';
import { describe, it } from 'vitest';

describe('SearchView Component', () => {
  it('render searchView component', () => {
    render(
      <MemoryRouter initialEntries={[ROUTE_PATH.DETAILSPOKEMON]}>
        <Search />
      </MemoryRouter>
    );
  });
});
