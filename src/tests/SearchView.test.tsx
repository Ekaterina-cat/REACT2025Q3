import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, it } from 'vitest';

import { Search } from '../pages';
import { ROUTE_PATH } from '../routers/constants/routers';

describe('SearchView Component', () => {
  it('render searchView component', () => {
    render(
      <MemoryRouter initialEntries={[ROUTE_PATH.DETAILSPOKEMON]}>
        <Search />
      </MemoryRouter>
    );
  });
});
