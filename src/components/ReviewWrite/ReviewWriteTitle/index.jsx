import React from 'react'

import * as S from './style'

export const ReviewWriteTitle = ({ tree_name, tree_addr }) => {
  return (
    <>
      <S.TreeTitle>
        <S.MainAddress>{tree_name}</S.MainAddress>
        <S.DetailAddess>{tree_addr}</S.DetailAddess>
      </S.TreeTitle>
    </>
  )
}
