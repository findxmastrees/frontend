import { apiSlice } from './apiSlice'
// import { setTrees } from '../slices/treeSlice'

export const treeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTrees: builder.mutation({
      query: () => ({
        url: '/trees',
        params: {
          map_x: '37.565',
          map_y: '126.982',
          southwest_x: '37.5639',
          southwest_y: '126.9806',
          northeast_x: '37.5657',
          northeast_y: '126.983',
        },
        method: 'GET',
      }),
      transformErrorResponse: (responseData) => {
        // return responseData.map((data) => {
        //   // 거리 계산
        // })
        return responseData
      },
      providesTags: (result = [], error, arg) => {
        return result
          ? [
            { type: 'Tree', id: 'LIST' },
            ...result.map((id) => ({ type: 'Tree', id })),
          ]
          : [{ type: 'Tree', id: 'LIST' }]
      },
      // async onQueryStarted(arg, { dispatch, queryFulfilled }) {
      //   try {
      //     const { data } = await queryFulfilled
      //     dispatch(setTrees(data))
      //   } catch (err) {
      //     console.error(err)
      //   }
      // },
    }),
  }),
})

export const { useGetTreesMutation } = treeApiSlice
