import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api/apiSlice'
import authSlice from './slices/authSlice'
import treeSlice from './slices/treeSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice,
    tree: treeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
