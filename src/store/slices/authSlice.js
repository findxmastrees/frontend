import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: { displayName: null, uid: null, email: null },
  reducers: {
    setActiveUser: (state, action) => {
      console.log(action.payload)
      const { displayName, uid, email } = action.payload
      state.displayName = displayName
      state.uid = uid
      state.email = email
    },
    logOut: (state, action) => {
      state.user = null
    },
  },
})

export const { setActiveUser, logOut } = authSlice.actions

export default authSlice.reducer
