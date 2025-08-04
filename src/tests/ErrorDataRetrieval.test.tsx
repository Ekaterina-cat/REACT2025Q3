import { render } from '@testing-library/react';
import { describe, it } from 'vitest';

import { ErrorDataRetrieval } from '../components';

describe('ErrorDataRetrieval Component', () => {
  it('render errorDataRetrieval component', () => {
    render(<ErrorDataRetrieval />);
  });
});
