import { createSlice } from '@reduxjs/toolkit'
// import { v4 as uuidv4 } from 'uuid'

// const treesLatLng = [
//   { lat: 37.508800099360364, lng: 127.10499340309457 },
//   { lat: 37.51292818886553, lng: 127.10330254942795 },
//   { lat: 37.51139997489804, lng: 127.09922859939 },
//   { lat: 37.51121236409042, lng: 127.10768871630913 },
//   { lat: 37.507573744433536, lng: 127.10610007524649 },
// ].map(({ lat, lng }, i) => ({
//   id: uuidv4(),
//   name: `더현대 서울 트리${i}`,
//   address: '서울특별시 어쩌구 무슨동 101 1, 2층',
//   lotNumber: '서울시 무슨동 1004-1 1,2층 ',
//   lat,
//   lng,
//   reviews: [
//     {
//       userName: '복순',
//       content: '트리가 너무 이뻐요! 근데 야외라서 꼭 따숩게 입고 가셔야 해요!! 모두 메리클스마스~',
//       src: '../../assets/img/image.png',
//     },
//     {
//       userName: '쿠쿠',
//       content: '강아지랑 산책하러 가기 좋은 장소에요!',
//       src: '../../assets/img/image.png',
//     },
//     {
//       userName: '주스',
//       content: '친구들이랑 사진 찍으러 가기 너무 좋아요!',
//       src: '../../assets/img/image.png',
//     },
//     {
//       userName: '에린',
//       content: '트리 말고도 주변에 놀 곳이 많아서 여기서 사진 찍고 놀고 먹고 너무 좋아요!ㅎㅎ하핫!',
//       src: '../../assets/img/image.png',
//     },
//     {
//       userName: '투니',
//       content: '크리스마스 트리 맛집!! 트리 폼 미쳤다..!',
//       src: '../../assets/img/image.png',
//     },
//   ],
// }))

// const initialState = {
//   trees: treesLatLng,
//   tree: {
//     id: uuidv4(),
//     name: '더현대 서울 트리',
//     address: '서울특별시 어쩌구 무슨동 101 1, 2층',
//     lotNumber: '서울시 무슨동 1004-1 1,2층 ',
//     lat: 37.508800099360364,
//     lng: 127.10499340309457,
//     reviews: [
//       {
//         userName: '복순',
//         content:
//           '트리가 너무 이뻐요! 근데 야외라서 꼭 따숩게 입고 가셔야 해요!! 모두 메리클스마스~',
//         src: '../../assets/img/image.png',
//       },
//       {
//         userName: '쿠쿠',
//         content: '강아지랑 산책하러 가기 좋은 장소에요!',
//         src: '../../assets/img/image.png',
//       },
//       {
//         userName: '주스',
//         content: '친구들이랑 사진 찍으러 가기 너무 좋아요!',
//         src: '../../assets/img/image.png',
//       },
//       {
//         userName: '에린',
//         content:
//           '트리 말고도 주변에 놀 곳이 많아서 여기서 사진 찍고 놀고 먹고 너무 좋아요!ㅎㅎ하핫!',
//         src: '../../assets/img/image.png',
//       },
//       {
//         userName: '투니',
//         content: '크리스마스 트리 맛집!! 트리 폼 미쳤다..!',
//         src: '../../assets/img/image.png',
//       },
//     ],
//   },
// }

const treeSlice = createSlice({
  name: 'tree',
  initialState: { trees: [], tree: null, likeTree: false },
  reducers: {
    setTrees: (state, action) => {
      state.trees = [...action.payload]
    },
    selectTree: (state, action) => {
      state.tree = state.trees.find(({ tree_id }) => tree_id === action.payload)
    },
    likeTree: (state, action) => {
      state.likeTree = !state.likeTree
    },
    // addTree: (state, action) => {
    //   state.trees = [
    //     ...state.trees,
    //     {
    //       id: uuidv4(),
    //       reviews: [],
    //       ...action.payload,
    //     },
    //   ]
    // },
  },
})

export const { setTrees, selectTree, addTree } = treeSlice.actions

export const selectAllLocation = (state) =>
  state.tree.trees.map(({ lat, lng }) => ({
    lat,
    lng,
  }))

export const selectAllTrees = (state) => state.tree.trees

export default treeSlice.reducer
