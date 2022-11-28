import React, { useEffect, useRef, useState } from 'react'
import * as S from './style'
import { ZoomButton } from '../../components/MainZoom/index'
import TreeInfos from '../../components/TreeInfos/index'
import ToastAlert from '../../components/common/ToastAlert'

export const MainPage = () => {
  // const [latLng, setLatLng] = useState({
  //   lat: 33.450701,
  //   lng: 126.570667,
  // })

  const [_map, setMap] = useState()
  const container = useRef(null)
  const [IsRoadName, setIsRoadName] = useState()
  let [copiedAlert, setCopiedAlert] = useState(false)

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
      </S.InfoSection>
      <TreeInfos setIsRoadName={setIsRoadName} setCopiedAlert={setCopiedAlert} />
      {copiedAlert && <ToastAlert setCopiedAlert={setCopiedAlert} IsRoadName={IsRoadName} />}
    </S.Container>
  )
}
