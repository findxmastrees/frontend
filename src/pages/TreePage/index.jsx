import React from 'react'
import { MapImage } from '../../components/MapImage'
import { ImgList } from '../../components/Review/ImgList'
import Header from '../../components/Header'
//infoHeader > Header로 이름 변경
import { TreeNames } from '../../components/common/Tree/TreeNames'
import { useSelector } from 'react-redux'
import { ReviewList } from '../../components/Review/ReviewList'
import { ReviewButton } from '../../components/Review/ReviewButton'
import * as S from './style'

export const TreePage = () => {
  const { lat, lng } = useSelector((state) => state.tree.tree)
  return (
    <>
      <S.MainContainer>
        <Header />
        <MapImage lat={lat} lng={lng} />
        <TreeNames />
        <ImgList />
        <ReviewList />
        <ReviewButton />
      </S.MainContainer>
    </>
  )
}
