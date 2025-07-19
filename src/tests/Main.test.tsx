import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Main from '../components/Main';

const mockPokemons = [{ name: 'Pikachu' }, { name: 'Charmander' }];

describe('Main Component', () => {
  const setupComponent = () => {
    window.fetch = vi.fn().mockResolvedValue(mockPokemons);
    render(<Main searchText="" pokemons={[]} />);
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');
    return { input, button };
  };

  it('renders main component', () => {
    render(<Main searchText="" pokemons={[]} />);
  });

  it('saves searchText to localStorage', () => {
    const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');
    const { input, button } = setupComponent();

    fireEvent.change(input, { target: { value: 'Pikachu' } });
    fireEvent.click(button);

    expect(setItemSpy).toHaveBeenCalledWith('savedSearchPokemon', 'Pikachu');
  });

  it('overwrites existing localStorage value on new search', () => {
    const initSearchText = 'Initial Pikachu';
    const newSearchText = 'New Charmander';
    Storage.prototype.getItem = vi.fn().mockReturnValue(initSearchText);
    const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');
    const { input, button } = setupComponent();

    fireEvent.change(input, { target: { value: newSearchText } });
    fireEvent.click(button);

    expect(setItemSpy).toHaveBeenCalledWith(
      'savedSearchPokemon',
      newSearchText
    );
  });
});
