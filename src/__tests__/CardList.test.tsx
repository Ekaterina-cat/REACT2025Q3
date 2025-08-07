import '@testing-library/jest-dom';

import { CardList } from '@components/';
import { configureStore } from '@reduxjs/toolkit';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ROUTE_PATH } from '@utils/routers';
import type { CheckboxState } from '@utils/types';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { beforeEach, describe, expect, it, vi } from 'vitest';
const mockNavigate = vi.fn();

vi.mock('react-router', async (importOriginal) => {
  const actual = await importOriginal();
  if (typeof actual !== 'object' || actual === null) {
    throw new Error('react-router must export an object');
  }
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

const mockPokemons = [
  { name: 'BULBASAUR', url: 'https://example.com/bulbasaur' },
  { name: 'CHARMANDER', url: 'https://example.com/charmander' },
];

const mockStore = configureStore({
  reducer: {
    checkbox: (state: CheckboxState = { checkboxes: {}, selectedCount: 0 }) =>
      state,
  },
});

describe('CardList Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  it('render component cardList', async () => {
    render(
      <Provider store={mockStore}>
        <MemoryRouter initialEntries={[ROUTE_PATH.MAIN]}>
          <CardList pokemons={mockPokemons} />
        </MemoryRouter>
      </Provider>
    );
    expect(
      screen.getByRole('status', { name: /загрузка.../i })
    ).toBeInTheDocument();

    await waitFor(() => {
      expect(
        screen.queryByRole('status', { name: /загрузка.../i })
      ).not.toBeInTheDocument();
    });

    expect(screen.getByText('CHARMANDER')).toBeInTheDocument();
  });

  it('should call navigate when clicking on a pokemon', async () => {
    const user = userEvent.setup();
    render(
      <Provider store={mockStore}>
        <MemoryRouter initialEntries={[ROUTE_PATH.MAIN]}>
          <CardList pokemons={mockPokemons} />
        </MemoryRouter>
      </Provider>
    );
    expect(
      screen.getByRole('status', { name: /загрузка.../i })
    ).toBeInTheDocument();
    await waitFor(
      () => {
        const loader = screen.queryByRole('status', { name: /загрузка.../i });
        expect(loader).not.toBeInTheDocument();
      },
      { timeout: 3000 }
    );
    const charmanderElement = screen.getByText('CHARMANDER');
    await user.click(charmanderElement);
    expect(mockNavigate).toHaveBeenCalledWith('/page=1/charmander');
  });
});
