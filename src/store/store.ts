import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { fetchDataDetailsPokemon, pokemonApiRequest } from '@utils/api/';

import checkboxReducer from './checkbox-slice';

export const store = configureStore({
  reducer: {
    checkbox: checkboxReducer,
    [pokemonApiRequest.reducerPath]: pokemonApiRequest.reducer,
    [fetchDataDetailsPokemon.reducerPath]: fetchDataDetailsPokemon.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(pokemonApiRequest.middleware)
      .concat(fetchDataDetailsPokemon.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
