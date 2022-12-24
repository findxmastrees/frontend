import { apiSlice } from './apiSlice'

export const reviewApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getReview: builder.query({
      query: (arg) => ({
        url: `/review/${arg}`,
      }),
      transformResponse: (responseData) => responseData.data,
      providesTags: (result = [], error, arg) => [{ type: 'Review', id: arg }],
    }),
  }),
})
