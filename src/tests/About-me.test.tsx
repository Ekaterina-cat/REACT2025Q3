import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { AboutMe } from '../pages';

const mockContacts = [
  {
    imgSrc: '/test-image.jpg',
    imgAlt: 'Test Contact',
    href: '#',
    text: 'Test Contact',
  },
];

const mockSkills = [{ skill: 'React', level: 'Advanced' }];

const mockSoftSkills = ['Communication'];

vi.mock('./types/types', () => ({
  contacts: mockContacts,
  skills: mockSkills,
  softSkill: mockSoftSkills,
  codeString: '// Test code',
}));

describe('AboutMe', () => {
  it('renders main sections', () => {
    render(<AboutMe />);

    expect(
      screen.getByRole('heading', { name: /katsiaryna dounar/i })
    ).toBeTruthy();
    expect(screen.getByRole('heading', { name: /contacts/i })).toBeTruthy();
    expect(screen.getByRole('heading', { name: /soft skills/i })).toBeTruthy();
    expect(
      screen.getByRole('heading', { name: /technical skills/i })
    ).toBeTruthy();
    expect(screen.getByRole('heading', { name: /code example/i })).toBeTruthy();
    expect(screen.getByRole('heading', { name: /languages/i })).toBeTruthy();
  });

  it('renders soft skills correctly', () => {
    render(<AboutMe />);
    const skillElement = screen.getByText(mockSoftSkills[0]);
    expect(skillElement).toBeTruthy();
  });
});
