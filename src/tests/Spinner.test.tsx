import { render } from '@testing-library/react';
import { describe, it } from 'vitest';

import { Spinner } from '../components';

describe('Spinner Component', () => {
  it('render component spinner', () => {
    render(<Spinner />);
  });
});
