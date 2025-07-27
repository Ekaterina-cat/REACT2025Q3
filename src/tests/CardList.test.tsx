import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, it } from 'vitest';

import { CardList } from '../components';
import { ROUTE_PATH } from '../routers/constants/routers';

describe('CatrdList Component', () => {
  it('render component cardList', () => {
    render(
      <MemoryRouter initialEntries={[ROUTE_PATH.MAIN]}>
        <CardList pokemons={[{ name: 'test1', url: 'testURL' }]} />
      </MemoryRouter>
    );
  });
});
