import { Search } from '@pages/index';
import { store } from '@store/store';
import { render } from '@testing-library/react';
import { ROUTE_PATH } from '@utils/routers';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { describe, it } from 'vitest';

describe('SearchView Component', () => {
  it('render searchView component', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[ROUTE_PATH.DETAILSPOKEMON]}>
          <Search />
        </MemoryRouter>
      </Provider>
    );
  });
});
