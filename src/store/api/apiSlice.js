import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://whatevertree.herokuapp.com',
  }),
  tagTypes: ['Tree', 'StarTree', 'Review'],
  endpoints: (builder) => ({}),
})
