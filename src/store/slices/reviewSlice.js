import { createSlice } from '@reduxjs/toolkit'

const reviewSlice = createSlice({
  name: 'review',
  initialState: { comments: [] },
  reducers: {
    getComments: (state, action) => {
      console.log(action.payload)
      state.comments = [...action.payload]
    },
  },
})

export const { getComments } = reviewSlice.actions

export default reviewSlice.reducer
