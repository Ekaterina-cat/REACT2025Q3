import '@testing-library/jest-dom';

import { act, fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Main } from '../components';

const mockPokemons = [{ name: 'Pikachu' }, { name: 'Charmander' }];

describe('Main Component', () => {
  const setupComponent = () => {
    window.fetch = vi.fn().mockResolvedValue(mockPokemons);
    render(<Main />);
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');
    return { input, button };
  };

  it('renders main component', () => {
    render(<Main />);
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
