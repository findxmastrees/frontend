import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/authSlice'
import modalSlice from './slices/modalSlice'
import treeSlice from './slices/treeSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    tree: treeSlice,
    modal: modalSlice,
  },
})
