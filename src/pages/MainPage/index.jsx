import React, { useRef, useEffect, useState } from 'react'
import * as S from './style'
import { ZoomButton } from '../../components/MainZoom/index'
import TreeInfos from '../../components/treeInfos'

export const MainPage = () => {
  // const [latLng, setLatLng] = useState({
  //   lat: 33.450701,
  //   lng: 126.570667,
  // })

  const [_map, setMap] = useState()
  const container = useRef(null)

  useEffect(() => {
    const map = new window.kakao.maps.Map(container.current, {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    })
    setMap(map)
  }, [])

  return (
    <S.Container ref={container}>
      <S.InfoSection>
        <ZoomButton map={_map} />
        <TreeInfos />
      </S.InfoSection>
    </S.Container>
  )
}
