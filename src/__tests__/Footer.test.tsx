import { Footer } from '@components/';
import { render } from '@testing-library/react';
import { describe, it } from 'vitest';

describe('Footer Componenet', () => {
  it('render component footer', () => {
    render(<Footer />);
  });
});
