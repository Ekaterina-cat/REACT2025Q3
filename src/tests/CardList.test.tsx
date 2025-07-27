import '@testing-library/jest-dom';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { CardList } from '../components';
import { ROUTE_PATH } from '../routers/constants/routers';

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

describe('CatrdList Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  it('render component cardList', async () => {
    render(
      <MemoryRouter initialEntries={[ROUTE_PATH.MAIN]}>
        <CardList pokemons={mockPokemons} />
      </MemoryRouter>
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
    render(
      <MemoryRouter initialEntries={[ROUTE_PATH.MAIN]}>
        <CardList pokemons={mockPokemons} />
      </MemoryRouter>
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
    fireEvent.click(charmanderElement);
    expect(mockNavigate).toHaveBeenCalledWith('/page=1/charmander');
  });
});
