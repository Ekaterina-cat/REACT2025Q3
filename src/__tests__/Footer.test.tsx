import '@testing-library/jest-dom';

import { Footer } from '@components/';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Footer Componenet', () => {
  it('renders the footer component correctly', () => {
    render(<Footer />);
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();
    expect(screen.getByAltText('rs_school_js')).toBeInTheDocument();
    expect(screen.getByAltText('rs_school_js')).toHaveAttribute(
      'src',
      'rs_school_js.svg'
    );
    expect(screen.getByText('2025')).toBeInTheDocument();
    expect(screen.getByAltText('logo_github')).toBeInTheDocument();
    expect(screen.getByAltText('logo_github')).toHaveAttribute(
      'src',
      'logo_github.png'
    );
    expect(screen.getByText('Katsiaryna Dounar')).toBeInTheDocument();
  });

  it('checks if links have correct href attributes', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: 'rs_school_js' })).toHaveAttribute(
      'href',
      'https://rs.school/courses/reactjs'
    );
    expect(
      screen.getByRole('link', { name: /Katsiaryna Dounar/i })
    ).toHaveAttribute('href', 'https://github.com/Ekaterina-cat');
  });
});
