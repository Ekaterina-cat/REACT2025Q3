import '@testing-library/jest-dom';

import { BodyPage } from '@components/';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { ROUTE_PATH } from '@utils/routers';
import { MemoryRouter } from 'react-router';
import { describe, expect, it, vi } from 'vitest';

const mockPokemons = [{ name: 'Pikachu' }, { name: 'Charmander' }];

describe('Main Component', () => {
  const setupComponent = () => {
    window.fetch = vi.fn().mockResolvedValue(mockPokemons);
    render(
      <MemoryRouter initialEntries={[ROUTE_PATH.MAIN]}>
        <BodyPage />
      </MemoryRouter>
    );
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');
    return { input, button };
  };

  it('renders main component', () => {
    render(
      <MemoryRouter initialEntries={[ROUTE_PATH.MAIN]}>
        <BodyPage />
      </MemoryRouter>
    );
  });

  it('saves searchText to localStorage', async () => {
    const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');
    const { input, button } = setupComponent();

    await act(async () => {
      fireEvent.change(input, { target: { value: 'Pikachu' } });
      fireEvent.click(button);
    });

    expect(setItemSpy).toHaveBeenCalledWith('savedSearchPokemon', 'Pikachu');
  });

  it('overwrites existing localStorage value on new search', async () => {
    const initSearchText = 'Initial Pikachu';
    const newSearchText = 'New Charmander';
    Storage.prototype.getItem = vi.fn().mockReturnValue(initSearchText);
    const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');
    const { input, button } = setupComponent();

    await act(async () => {
      fireEvent.change(input, { target: { value: newSearchText } });
      fireEvent.click(button);
    });

    expect(setItemSpy).toHaveBeenCalledWith(
      'savedSearchPokemon',
      newSearchText
    );
  });
});
