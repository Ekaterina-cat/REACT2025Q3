import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { pokemonApiRequest } from '@utils/api/';
import { pokemonApi } from '@utils/api/pokemon-api';

import checkboxReducer from './checkbox-slice';

export const store = configureStore({
  reducer: {
    checkbox: checkboxReducer,
    [pokemonApiRequest.reducerPath]: pokemonApiRequest.reducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(pokemonApiRequest.middleware)
      .concat(pokemonApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
