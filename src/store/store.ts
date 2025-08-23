import { configureStore } from '@reduxjs/toolkit';

import countriesReducer from './countries-slice';
import modalSlice from './modal-slice';

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    modal: modalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
