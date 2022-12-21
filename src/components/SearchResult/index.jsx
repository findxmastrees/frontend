import React from 'react'
import * as S from './style'

export const SearchResult = ({ info: { tree_name, tree_addr } }) => {
  return (
    <S.Container>
      <S.TreeIcon />
      <S.Wrapper>
        <S.TreeName>{tree_name}</S.TreeName>
        <S.TreeAddress>{tree_addr}</S.TreeAddress>
      </S.Wrapper>
    </S.Container>
  )
}
