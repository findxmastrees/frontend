import React from 'react'
import { MapImage } from '../../components/MapImage'
import { ImgList } from '../../components/Review/ImgList'
import InfoHeader from '../../components/InfoHeader'

export const TreePage = () => {
  return (
    <>
      <InfoHeader />
      <main>
        <MapImage />
        <ImgList />
      </main>
    </>
  )
}
