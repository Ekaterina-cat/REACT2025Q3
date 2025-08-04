import { render } from '@testing-library/react';
import { describe, it } from 'vitest';

import { Footer } from '../components';

describe('Footer Componenet', () => {
  it('render component footer', () => {
    render(<Footer />);
  });
});
