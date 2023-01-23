import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  displayName: null,
  uid: null,
  email: null,
  myLocation: {
    lat: 37.560274328462704,
    lon: 126.98080456021914,
    isLocLoading: true,
  },
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      const { displayName, uid, email } = action.payload
      state.displayName = displayName
      state.uid = uid
      state.email = email
    },
    logOut: (state, action) => {
      state.user = null
    },
    setMyLocation: (state, action) => {
      state.myLocation = { ...state.myLocation, ...action.payload }
    },
  },
})

export const { setActiveUser, logOut, setMyLocation } = authSlice.actions

export default authSlice.reducer
