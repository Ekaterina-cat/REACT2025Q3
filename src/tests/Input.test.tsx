import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Input } from '../components';

describe('Input', () => {
  const mockOnChange = vi.fn();

  it('render Input and handles input change', () => {
    render(<Input onChange={mockOnChange} value="" />);
    const inputElement = screen.getByPlaceholderText('Search...');
    fireEvent.change(inputElement, { target: { value: 'testText' } });
    expect(inputElement).toBeInTheDocument();
  });

  it('renders Input with a default value', () => {
    render(<Input onChange={mockOnChange} value="defaultValue" />);
    const inputElement = screen.getByPlaceholderText('Search...');
    expect(inputElement).toHaveValue('defaultValue');
  });
});
