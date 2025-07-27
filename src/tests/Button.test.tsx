import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Button } from '../components';

describe('Button', () => {
  it('render and calls onClick', () => {
    const mockOnClick = vi.fn();
    render(<Button onClick={mockOnClick} />);
    expect(screen.getByText('SEARCH')).toBeDefined();
    fireEvent.click(screen.getByText('SEARCH'));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
