import { createSlice } from '@reduxjs/toolkit'

const reviewSlice = createSlice({
  name: 'review',
  initialState: {
    comments: [],
    comment: [],
  },
  reducers: {
    getComments: (state, action) => {
      // state.comments = action.payload.map((comment) => ({ ...comment, isClick: false }))
      state.comments = [...action.payload]
    },

    selectComment: (state, action) => {
      // console.log('reducer', action.payload)
      state.comment = state.comment.filter((c) => c.comment_id !== action.payload.comment_id)
      if (state.comment.length >= 3) {
        return
        // alert : 최대 3개까지만 선택 가능합니다.
      }
      state.comment.active = !action.payload.active
      state.comment.push(action.payload)
    },
  },
})

export const { getComments, selectComment } = reviewSlice.actions

export default reviewSlice.reducer
