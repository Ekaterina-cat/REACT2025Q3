import '@testing-library/jest-dom';

import { PokemonDetail } from '@components/';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { beforeEach, describe, expect, it, vi } from 'vitest';

describe('PokemonDetail', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('renders loading state when pokemonId is not available', () => {
    render(
      <MemoryRouter>
        <PokemonDetail />
      </MemoryRouter>
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
