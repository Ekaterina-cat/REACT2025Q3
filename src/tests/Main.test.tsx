import '@testing-library/jest-dom';

import { act, fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, expect, it, vi } from 'vitest';

import { Main } from '../components';
import { ROUTE_PATH } from '../routers/constants/routers';

const mockPokemons = [{ name: 'Pikachu' }, { name: 'Charmander' }];

describe('Main Component', () => {
  const setupComponent = () => {
    window.fetch = vi.fn().mockResolvedValue(mockPokemons);
    render(
      <MemoryRouter initialEntries={[ROUTE_PATH.MAIN]}>
        <Main />
      </MemoryRouter>
    );
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');
    return { input, button };
  };

  it('renders main component', () => {
    render(
      <MemoryRouter initialEntries={[ROUTE_PATH.MAIN]}>
        <Main />
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
