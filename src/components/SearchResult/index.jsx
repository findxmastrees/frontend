import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './style'

export const SearchResult = ({ info: { tree_id, tree_name, tree_addr } }) => {
  return (
    <S.Container>
      <S.TreeIcon />
      <Link to={`/tree/${tree_id}`}>
        <S.Wrapper>
          <S.TreeName>{tree_name}</S.TreeName>
          <S.TreeAddress>{tree_addr}</S.TreeAddress>
        </S.Wrapper>
      </Link>
    </S.Container>
  )
}
