import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Button } from '../components';

describe('Button', () => {
  it('render and calls onClick', () => {
    const mockOnClick = vi.fn();
    render(<Button onClick={mockOnClick} />);
    const searchButton = screen.getByAltText('search-magnifier');
    expect(searchButton).toBeDefined();
    fireEvent.click(searchButton);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
