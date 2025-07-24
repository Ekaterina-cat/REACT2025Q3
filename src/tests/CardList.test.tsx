import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import CardList from '../components/card-list/card-list';

describe('CatrdList Component', () => {
  it('render component cardList', () => {
    render(<CardList pokemons={[{ name: 'test1', url: 'testURL' }]} />);
  });
});
