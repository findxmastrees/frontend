import { apiSlice } from './apiSlice'
import { setTrees, setTree } from '../slices/treeSlice'

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
      query: ({ tree_id, map_x, map_y }) => ({
        url: `/trees/${tree_id}`,
        params: {
          map_x,
          map_y
        }
      }),
      transformResponse: (responseData) => {
        return responseData.data
      },
      providesTags: (result, err, id) => [{ type: 'Tree', id }],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(setTree(data))
        } catch (err) {
          console.log(err)
        }
      },
    }),
    starTree: builder.mutation({
      query: ({ tree_id, user_id }) => ({
        url: '/star',
        method: 'POST',
        body: {
          tree_id,
          user_id,
        },
      }),
      invalidatesTags: (result, err, arg) => [{ type: 'Tree', id: arg.tree_id }],
    }),
  }),
})

export const { useLazyGetTreesQuery, useGetTreeQuery, useStarTreeMutation } = treeApiSlice
