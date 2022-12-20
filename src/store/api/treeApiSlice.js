import { apiSlice } from './apiSlice'
import { setTrees } from '../slices/treeSlice'

export const treeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTrees: builder.query({
      query: (arg) => ({
        url: '/trees',
        params: {
          ...arg,
        },
        method: 'GET',
      }),
      transformResponse: (responseData) => {
        return responseData.data
      },
      providesTags: (result = [], error, arg) => {
        return [
          { type: 'Tree', id: 'LIST' },
          ...result.map(({ tree_id }) => ({ type: 'Tree', id: tree_id })),
        ]
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          console.log(data)
          dispatch(setTrees(data))
        } catch (err) {
          console.error(err)
        }
      },
    }),
    getTree: builder.query({
      query: (id) => ({
        url: `/trees/${id}`,
      }),
      transformResponse: (responseData) => {
        return responseData.data
      },
      providesTags: (result, err, id) => [{ type: 'Tree', id }],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          console.log(data)
        } catch (err) {
          console.log(err)
        }
      },
    }),
  }),
})

export const { useLazyGetTreesQuery, useGetTreeQuery } = treeApiSlice
