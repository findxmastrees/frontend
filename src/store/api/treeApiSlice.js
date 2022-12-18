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
      transformErrorResponse: (responseData) => {
        console.log(responseData)
        // return responseData.map((data) => {
        //   // 거리 계산
        // })
        return responseData
      },
      providesTags: (result = [], error, arg) => {
        return [
          { type: 'Tree', id: 'LIST' },
          ...result.data.map(({ tree_id }) => ({ type: 'Tree', id: tree_id })),
        ]
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const {
            data: { data },
          } = await queryFulfilled
          dispatch(setTrees(data))
        } catch (err) {
          console.error(err)
        }
      },
    }),
  }),
})

export const { useLazyGetTreesQuery } = treeApiSlice
