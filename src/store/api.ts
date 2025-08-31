import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_BASE } from '../utils/constants/constants';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE,
  }),
  endpoints: (builder) => ({
    getCo2Data: builder.query({
      query: () => 'owid-co2-data.json',
      keepUnusedDataFor: 3600,
    }),
  }),
});

export const { useGetCo2DataQuery } = api;
