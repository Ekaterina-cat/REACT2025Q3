import { Button } from '@components/';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

describe('Button', () => {
  it('renders the label correctly', () => {
    render(<Button onClick={vi.fn()} />);
    expect(screen.getByAltText('search-magnifier'));
  });
  it('calls onClick handler when clicked', async () => {
    const user = userEvent.setup();
    const mockOnClick = vi.fn();
    render(<Button onClick={mockOnClick} />);
    await user.click(screen.getByAltText('search-magnifier'));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
