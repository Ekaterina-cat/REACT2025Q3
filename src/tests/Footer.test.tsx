import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import Footer from '../components/Footer';

describe('Footer Componenet', () => {
  it('render component footer', () => {
    render(<Footer />);
  });
});
