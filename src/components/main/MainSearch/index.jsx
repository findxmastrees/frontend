import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './style'

export const MainSearch = ({ myLocation }) => {
  return (
    <Link to='/search' state={myLocation}>
      <S.SearchButton>
        <S.SearchIcon />
        <S.Text>트리, 주소 검색</S.Text>
      </S.SearchButton>
    </Link>
  )
}
