import { ErrorDataRetrieval } from '@components/';
import { render } from '@testing-library/react';
import { describe, it } from 'vitest';

describe('ErrorDataRetrieval Component', () => {
  it('render errorDataRetrieval component', () => {
    render(<ErrorDataRetrieval />);
  });
});
