import { apiSlice } from './apiSlice'
import { getComments } from '../slices/reviewSlice'

export const reviewApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCommentsList: builder.query({
      query: (arg) => ({
        url: '/comment',
        params: {
          ...arg,
        },
        method: 'GET',
      }),
      transformResponse: (responseData) => {
        return responseData.data
      },
      providesTags: (result, err, id) => [{ type: 'comment', id }],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(getComments(data))
        } catch (err) {
          console.log(err)
        }
      },
    }),

    setReview: builder.mutation({
      query: (formData) => ({
        url: '/review',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: [{ type: 'Review' }],
    }),
  }),
})
export const { useGetCommentsListQuery, useSetReviewMutation } = reviewApiSlice
