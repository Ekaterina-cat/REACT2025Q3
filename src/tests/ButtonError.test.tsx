import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { ButtonError } from '../components';

describe('Button Error', () => {
  it('render and calls onClick', () => {
    const mockOnClick = vi.fn();
    render(<ButtonError onClick={mockOnClick} />);
    expect(screen.getByText('ERROR')).toBeDefined();
    fireEvent.click(screen.getByText('ERROR'));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
