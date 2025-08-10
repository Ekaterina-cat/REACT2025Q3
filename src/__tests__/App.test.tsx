import { store } from '@store/store';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, expect, it } from 'vitest';

import App from '../App';

describe('App Component', () => {
  it('should render App component without crashing', () => {
    const { container } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(container.firstChild).not.toBeNull();
  });
});
