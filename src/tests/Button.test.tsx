import { describe, expect, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../components/Button';

describe('Button', () => {
  it('render and calls onClick', () => {
    const mockOnClick = vi.fn();
    render(<Button onClick={mockOnClick} />);
    expect(screen.getByText('SEARCH')).toBeDefined();
    fireEvent.click(screen.getByText('SEARCH'));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
