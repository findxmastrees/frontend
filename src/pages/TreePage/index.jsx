import React from 'react'
import { MapImage } from '../../components/MapImage'
import { ImgList } from '../../components/Review/ImgList'
import InfoHeader from '../../components/InfoHeader'
import { TreeNames } from '../../components/common/Tree/TreeNames'
import { useSelector } from 'react-redux'
import { ReviewList } from '../../components/Review/ReviewList'
import { ReviewButton } from '../../components/Review/ReviewButton'

export const TreePage = () => {
  const { lat, lng } = useSelector((state) => state.tree.tree)
  return (
    <>
      <InfoHeader />
      <main>
        <MapImage lat={lat} lng={lng} />
        <TreeNames />
        <ImgList />
        <ReviewList />
        <ReviewButton />
      </main>
    </>
  )
}
