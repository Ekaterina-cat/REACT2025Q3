import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, it } from 'vitest';

import App from '../App';
import { store } from '../store/store';

describe('App Component', () => {
  it('render component app', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
});
