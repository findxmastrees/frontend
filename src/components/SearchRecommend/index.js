import React, { useState, useEffect } from 'react'
import { SearchAddressIcon } from '../Icons'
import * as S from './style'
import { SearchCard } from '../SearchCard'

export const SearchRecommend = ({ myLocation, data }) => {
  const { kakao } = window
  // eslint-disable-next-line no-unused-vars
  const [district, setDistrict] = useState('')

  // 주소 내 구,읍,면 추출
  const getAddr = (lat, lng) => {
    const geocoder = new kakao.maps.services.Geocoder()
    const coord = new kakao.maps.LatLng(lat, lng)

    geocoder.coord2Address(coord.getLng(), coord.getLat(), (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const newDistrict = result[0].address.address_name.match(
          // eslint-disable-next-line no-useless-escape
          /([가-힣A-Za-z·\d~\-\.]{1,}(구|읍|면))/,
        )[0]
        setDistrict(newDistrict)
      }
    })
  }

  useEffect(() => {
    if (data && data.length) getAddr(myLocation.lat, myLocation.lon)
  }, [])

  return data && data.length ? (
    <S.Container>
      <S.SubTitle>
        <strong>Trees&nbsp;</strong>Around
      </S.SubTitle>
      <S.Title>
        <strong>쿠쿠</strong>님을 위한 <span>오늘의 트리!</span>
      </S.Title>
      <S.Address>
        <SearchAddressIcon />
        {district}
      </S.Address>
      <S.CardsContainer>
        {data.map((item) => (
          <SearchCard key={item.tree_id} item={item} />
        ))}
      </S.CardsContainer>
    </S.Container>
  ) : null
}
