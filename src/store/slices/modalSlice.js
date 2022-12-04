import { createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
  name: 'modals',
  initialState: { addressShow: false, shareShow: false },
  reducers: {
    showAddressModal: (state, action) => {
      state.addressShow = !state.addressShow
    },
    showShareModal: (state, action) => {
      state.shareShow = !state.shareShow
    },
  },
})

export const { showAddressModal, showShareModal } = modalSlice.actions

export default modalSlice.reducer
