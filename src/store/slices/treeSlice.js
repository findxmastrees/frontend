import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const treesLatLng = [
  { lat: 37.508800099360364, lng: 127.10499340309457 },
  { lat: 37.51292818886553, lng: 127.10330254942795 },
  { lat: 37.51139997489804, lng: 127.09922859939 },
  { lat: 37.51121236409042, lng: 127.10768871630913 },
  { lat: 37.507573744433536, lng: 127.10610007524649 },
].map(({ lat, lng }, i) => ({
  id: uuidv4(),
  name: `더현대 서울 트리${i}`,
  address: '서울특별시 어쩌구 무슨동 101 1, 2층',
  lat,
  lng,
  reviews: [
    {
      userName: '쿠쿠123',
      content:
        '트리에 대한 후기 내용입니다. 트리에 대한 후기 내용입니다. 트리에 대한 후기 내용입니다. 트리에 대한 후기 내용입니다.',
      src: '../../assets/img/image.png',
    },
    {
      userName: '쿠쿠123',
      content:
        '트리에 대한 후기 내용입니다. 트리에 대한 후기 내용입니다. 트리에 대한 후기 내용입니다. 트리에 대한 후기 내용입니다.',
      src: '../../assets/img/image.png',
    },
    {
      userName: '쿠쿠123',
      content:
        '트리에 대한 후기 내용입니다. 트리에 대한 후기 내용입니다. 트리에 대한 후기 내용입니다. 트리에 대한 후기 내용입니다.',
      src: '../../assets/img/image.png',
    },
    {
      userName: '쿠쿠123',
      content:
        '트리에 대한 후기 내용입니다. 트리에 대한 후기 내용입니다. 트리에 대한 후기 내용입니다. 트리에 대한 후기 내용입니다.',
      src: '../../assets/img/image.png',
    },
  ],
}))

const initialState = {
  trees: treesLatLng,
  tree: {
    id: uuidv4(),
    name: '더현대 서울 트리',
    address: '서울특별시 어쩌구 무슨동 101 1, 2층',
    lat: 37.508800099360364,
    lng: 127.10499340309457,
    reviews: [
      {
        userName: '쿠쿠123',
        content:
          '트리에 대한 후기 내용입니다. 트리에 대한 후기 내용입니다. 트리에 대한 후기 내용입니다. 트리에 대한 후기 내용입니다.',
        src: '../../assets/img/image.png',
      },
      {
        userName: '쿠쿠123',
        content:
          '트리에 대한 후기 내용입니다. 트리에 대한 후기 내용입니다. 트리에 대한 후기 내용입니다. 트리에 대한 후기 내용입니다.',
        src: '../../assets/img/image.png',
      },
      {
        userName: '쿠쿠123',
        content:
          '트리에 대한 후기 내용입니다. 트리에 대한 후기 내용입니다. 트리에 대한 후기 내용입니다. 트리에 대한 후기 내용입니다.',
        src: '../../assets/img/image.png',
      },
      {
        userName: '쿠쿠123',
        content:
          '트리에 대한 후기 내용입니다. 트리에 대한 후기 내용입니다. 트리에 대한 후기 내용입니다. 트리에 대한 후기 내용입니다.',
        src: '../../assets/img/image.png',
      },
    ],
  },
}

const treeSlice = createSlice({
  name: 'tree',
  initialState,
  reducers: {
    selectTree: (state, action) => {
      state.tree = state.trees.filter(({ id }) => id === action.payload.id)
    },
  },
})

export const { selectTree } = treeSlice.actions

export const selectAllLocation = (state) =>
  state.tree.trees.map(({ lat, lng }) => ({
    lat,
    lng,
  }))

export default treeSlice.reducer
