import { configureStore } from '@reduxjs/toolkit';

import checkboxReducer from './checkbox-slice';

export const store = configureStore({
  reducer: {
    checkbox: checkboxReducer,
  },
});
