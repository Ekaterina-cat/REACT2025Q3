import { render } from '@testing-library/react';
import { describe, it } from 'vitest';

import { ErrorBoundary } from '../components';

describe('ErrorBoundary Component', () => {
  it('render component errorBoundary', () => {
    render(
      <ErrorBoundary>
        <div>OK</div>
      </ErrorBoundary>
    );
  });
});
