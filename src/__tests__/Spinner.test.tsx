import '@testing-library/jest-dom';

import { Spinner } from '@components/';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Spinner Component', () => {
  it('render component spinner', () => {
    render(<Spinner />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });
});
