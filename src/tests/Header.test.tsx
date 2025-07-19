import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import Header from '../components/Header';

describe('Header Component', () => {
  it('render componenet header', () => {
    render(<Header />);
  });
});
