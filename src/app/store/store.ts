import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';

import checkboxReducer from './checkbox-slice';

export const store = configureStore({
  reducer: {
    checkbox: checkboxReducer,
  },
});

setupListeners(store.dispatch);
