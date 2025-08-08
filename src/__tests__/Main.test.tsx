import '@testing-library/jest-dom';

import { BodyPage } from '@components/';
import { store } from '@store/store';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { ROUTE_PATH } from '@utils/routers';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { describe, expect, it, vi } from 'vitest';

const mockPokemons = [{ name: 'Pikachu' }, { name: 'Charmander' }];

describe('Main Component', () => {
  const setupComponent = () => {
    window.fetch = vi.fn().mockResolvedValue(mockPokemons);
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[ROUTE_PATH.MAIN]}>
          <BodyPage />
        </MemoryRouter>
      </Provider>
    );
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');
    return { input, button };
  };

  it('renders main component', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[ROUTE_PATH.MAIN]}>
          <BodyPage />
        </MemoryRouter>
      </Provider>
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
