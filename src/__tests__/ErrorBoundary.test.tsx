import { ErrorBoundary } from '@components/';
import { render } from '@testing-library/react';
import { describe, it } from 'vitest';

describe('ErrorBoundary Component', () => {
  it('render component errorBoundary', () => {
    render(
      <ErrorBoundary>
        <div>OK</div>
      </ErrorBoundary>
    );
  });
});
