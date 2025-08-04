import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, it } from 'vitest';

import { Header } from '../components';
import { ROUTE_PATH } from '../routers/constants/routers';

describe('Header Component', () => {
  it('render componenet header', () => {
    render(
      <MemoryRouter initialEntries={[ROUTE_PATH.MAIN]}>
        <Header />
      </MemoryRouter>
    );
  });
});
