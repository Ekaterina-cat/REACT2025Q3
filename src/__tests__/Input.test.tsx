import '@testing-library/jest-dom';

import { Input } from '@components/';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

describe('Input', () => {
  const mockOnChange = vi.fn();

  it('render Input and handles input change', () => {
    render(<Input onChange={mockOnChange} value="" />);
    const inputElement = screen.getByPlaceholderText('Search pokemon...');
    fireEvent.change(inputElement, { target: { value: 'testText' } });
    expect(inputElement).toBeInTheDocument();
  });

  it('renders Input with a default value', () => {
    render(<Input onChange={mockOnChange} value="defaultValue" />);
    const inputElement = screen.getByPlaceholderText('Search pokemon...');
    expect(inputElement).toHaveValue('defaultValue');
  });
});
