import React from 'react'
import { SearchAddressIcon } from '../Icons'
import * as S from './style'
import { SearchCard } from '../SearchCard'

export const SearchRecommend = ({ myLocation, data }) => {
  return (
    <S.Container>
      <S.SubTitle>
        <strong>Trees&nbsp;</strong>Around
      </S.SubTitle>
      <S.Title>
        <strong>쿠쿠</strong>님을 위한 <span>오늘의 트리!</span>
      </S.Title>
      <S.Address>
        <SearchAddressIcon />
        ㅇㅇ구
      </S.Address>
      <S.CardsContainer>
        {!!data && data.map((item) => <SearchCard key={item.id} item={item} />)}
      </S.CardsContainer>
    </S.Container>
  )
}
