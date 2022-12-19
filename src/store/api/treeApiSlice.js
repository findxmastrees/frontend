import { apiSlice } from './apiSlice'
import { setTrees } from '../slices/treeSlice'

export const treeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTrees: builder.query({
      query: () => ({
        url: '/trees',
        params: {
          map_x: '37.50940517826928',
          map_y: '127.10339948757449',
          southwest_x: '37.50131261764185',
          southwest_y: '127.08244376974523',
          northeast_x: '37.517494002547025',
          northeast_y: '127.12435972282796',
        },
        method: 'GET',
      }),
      transformErrorResponse: (responseData) => {
        console.log(responseData);
        // return responseData.map((data) => {
        //   // 거리 계산
        // })
        return responseData
      },
      providesTags: (result = [], error, arg) => {
        return [
          { type: 'Tree', id: 'LIST' },
          ...result.data.map(({ tree_id }) => ({ type: 'Tree', id: tree_id })),
        ];
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data: { data } } = await queryFulfilled
          dispatch(setTrees(data))
        } catch (err) {
          console.error(err)
        }
      },
    }),
  }),
})

export const { useLazyGetTreesQuery } = treeApiSlice
