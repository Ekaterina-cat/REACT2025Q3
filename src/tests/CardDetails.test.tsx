import '@testing-library/jest-dom';

import { render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { CardDetails } from '../components';

const mockDetails = {
  height: 10,
  weight: 200,
  types: [
    { type: { name: 'testTextTypeOne' } },
    { type: { name: 'testTextTypeTwo' } },
  ],
  abilities: [{ ability: { name: 'testTextAbilities' } }],
  stats: [
    { stat: { name: 'testTextStatsOne' }, base_stat: 40 },
    { stat: { name: 'testTextStatsTwo' }, base_stat: 50 },
  ],
  moves: [
    { move: { name: 'testTextMoveOne' } },
    { move: { name: 'testTextMoveTwo' } },
  ],
  sprites: { front_default: 'https://example.com/sprite.png' },
};

describe('CardDetails Component', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('handles network errors', async () => {
    const consoleSpyError = vi.spyOn(console, 'error');
    window.fetch = vi
      .fn()
      .mockRejectedValue(new Error('Network response was not ok'));

    render(<CardDetails url="https://example.com/pokemon/1" />);

    expect(screen.getByText('No details available')).toBeInTheDocument();

    await waitFor(() => {
      expect(consoleSpyError).toHaveBeenCalledWith(
        'Error fetching details: ',
        new Error('Network response was not ok')
      );
    });
  });

  it('handles non-ok responses', async () => {
    const consoleSpyError = vi.spyOn(console, 'error');
    window.fetch = vi.fn().mockResolvedValue({
      ok: false,
    });
    render(<CardDetails url="https://example.com/pokemon/1" />);

    await waitFor(() => {
      expect(consoleSpyError).toHaveBeenCalledWith(
        'Error fetching details: ',
        new Error('Network response was not ok')
      );
    });
  });

  it('renders details correctly', async () => {
    window.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockDetails),
    });
    render(<CardDetails url={'https://example.com/pokemon/1'} />);

    expect(screen.getByText('No details available')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('Height:')).toBeInTheDocument();
      expect(screen.getByText('Weight:')).toBeInTheDocument();
      expect(screen.getByText('Types:')).toBeInTheDocument();
      expect(screen.getByText('Abilities:')).toBeInTheDocument();
      expect(screen.getByText('Stats:')).toBeInTheDocument();
      expect(screen.getByText('Moves:')).toBeInTheDocument();
      expect(screen.getByText('10')).toBeInTheDocument();
      expect(screen.getByText('200')).toBeInTheDocument();
      expect(
        screen.getByText('testTextTypeOne, testTextTypeTwo')
      ).toBeInTheDocument();
      expect(screen.getByText('testTextAbilities')).toBeInTheDocument();
      expect(
        screen.getByText('testTextStatsOne: 40, testTextStatsTwo: 50')
      ).toBeInTheDocument();
      expect(
        screen.getByText('testTextMoveOne, testTextMoveTwo')
      ).toBeInTheDocument();
      expect(screen.getByAltText('Pokemon')).toHaveAttribute(
        'src',
        'https://example.com/sprite.png'
      );
    });
  });
});
