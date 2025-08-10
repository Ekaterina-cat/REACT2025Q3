import '@testing-library/jest-dom';

import { CardDetails } from '@components/';
import { store } from '@store/store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { beforeEach, describe, expect, it, vi } from 'vitest';

describe('CardDetails Component', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('handles network errors', async () => {
    render(
      <Provider store={store}>
        <CardDetails url="https://example.com/pokemon/1" />
      </Provider>
    );

    expect(screen.getByText('No details available')).toBeInTheDocument();
  });
});
