import React from 'react'
import * as S from './style'

export const SearchResult = ({ info: { name, address } }) => {
  return (
    <S.Container>
      <S.TreeIcon />
      <S.Wrapper>
        <S.TreeName>{name}</S.TreeName>
        <S.TreeAddress>{address}</S.TreeAddress>
      </S.Wrapper>
    </S.Container>
  )
}
