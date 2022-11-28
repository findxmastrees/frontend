import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './style'

export const MainSearch = () => {
  return (
    <Link to='/search'>
      <S.SearchButton>
        <S.SearchIcon />
        <S.Text>트리, 주소 검색</S.Text>
      </S.SearchButton>
    </Link>
  )
}
