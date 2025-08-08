import { configureStore } from '@reduxjs/toolkit';
import { pokemonApiRequest } from '@utils/api/';

import checkboxReducer from './checkbox-slice';

export const store = configureStore({
  reducer: {
    checkbox: checkboxReducer,
    [pokemonApiRequest.reducerPath]: pokemonApiRequest.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApiRequest.middleware),
});
