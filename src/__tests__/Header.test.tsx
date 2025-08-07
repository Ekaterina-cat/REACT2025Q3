import '@testing-library/jest-dom';

import { Header } from '@components/';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ROUTE_PATH } from '@utils/routers';
import { MemoryRouter, useLocation } from 'react-router';
import { describe, expect, it } from 'vitest';

const PathChecker = () => {
  const { pathname } = useLocation();
  return <div data-testid="pathname">{pathname}</div>;
};

describe('Header Component', () => {
  it('has working nav links', () => {
    render(
      <MemoryRouter initialEntries={[ROUTE_PATH.MAIN]}>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByRole('link', { name: /home/i })).toHaveAttribute(
      'href',
      '/page=1'
    );
    expect(screen.getByRole('link', { name: /about-me/i })).toHaveAttribute(
      'href',
      '/aboutme'
    );
  });

  it('navigates to correct pages when links clicked', async () => {
    render(
      <MemoryRouter initialEntries={[ROUTE_PATH.MAIN]}>
        <PathChecker />
        <Header />
      </MemoryRouter>
    );
    const pathElement = screen.getByTestId('pathname');
    expect(pathElement).toHaveTextContent(ROUTE_PATH.MAIN);
    await userEvent.click(screen.getByRole('link', { name: /home/i }));
    expect(pathElement).toHaveTextContent('/page=1');
    await userEvent.click(screen.getByRole('link', { name: /about-me/i }));
    expect(pathElement).toHaveTextContent('/aboutme');
  });

  it('renders all images', () => {
    render(
      <MemoryRouter initialEntries={[ROUTE_PATH.MAIN]}>
        <Header />
      </MemoryRouter>
    );
    ['header-bottom', 'header-pikachu', 'header-pokemon'].forEach((name) => {
      const img = screen.getByAltText(new RegExp(`.*${name}`));
      expect(img).toBeInTheDocument();
      const expectedSrc = `${name}.png`;
      expect(img).toHaveAttribute('src', expectedSrc);
    });
  });

  it('has correct text content', () => {
    render(
      <MemoryRouter initialEntries={[ROUTE_PATH.MAIN]}>
        <Header />
      </MemoryRouter>
    );
    ['Search Engine Pokemon', 'Project developed by RSSchool student'].forEach(
      (text) => expect(screen.getByText(new RegExp(text))).toBeInTheDocument()
    );
  });
});
