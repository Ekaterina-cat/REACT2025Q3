import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { Search } from '../pages/SearchView';

describe('SearchView Component', () => {
  it('render searchView component', () => {
    render(<Search />);
  });
});
