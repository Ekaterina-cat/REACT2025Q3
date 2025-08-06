import { Header } from '@components/';
import { render } from '@testing-library/react';
import { ROUTE_PATH } from '@utils/routers';
import { MemoryRouter } from 'react-router';
import { describe, it } from 'vitest';

describe('Header Component', () => {
  it('render componenet header', () => {
    render(
      <MemoryRouter initialEntries={[ROUTE_PATH.MAIN]}>
        <Header />
      </MemoryRouter>
    );
  });
});
