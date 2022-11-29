import React, { useRef, useEffect, useState } from 'react'
import * as S from './style'
import { MainSearch } from '../../components/MainSearch'
import { ZoomButton } from '../../components/MainZoom/index'
import TreeInfos from '../../components/treeInfos'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllLocation, selectTree } from '../../store/slices/treeSlice'
import treeImage from '../../assets/icons/tree.svg'
import treeClicked from '../../assets/icons/tree_clicked.svg'

export const MainPage = () => {
  const { kakao } = window

  const dispatch = useDispatch()
  const trees = useSelector(selectAllLocation)
  const [_map, setMap] = useState()
  const container = useRef(null)

  useEffect(() => {
    // 트리들의 중심 좌표
    const treesLat = trees.map((tree) => tree.lat)
    const treesLng = trees.map((tree) => tree.lng)
    const { minLat, minLng, maxLat, maxLng } = {
      minLat: Math.min(...treesLat),
      minLng: Math.min(...treesLng),
      maxLat: Math.max(...treesLat),
      maxLng: Math.max(...treesLng),
    }

    const centerX = minLat + (maxLat - minLat) / 2
    const centerY = minLng + (maxLng - minLng) / 2

    // 트리들의 중심좌표로 지도 생성
    const map = new kakao.maps.Map(container.current, {
      center: new kakao.maps.LatLng(centerX, centerY),
      level: 4,
    })

    // 각 트리 마커 추가
    let selectedMarker = null
    const markerSize = new kakao.maps.Size(40, 50)
    const basicImage = new kakao.maps.MarkerImage(treeImage, markerSize)

    trees.forEach(({ lat, lng }) => {
      const markerPosition = new kakao.maps.LatLng(lat, lng)

      let marker = new kakao.maps.Marker({
        map: map,
        position: markerPosition,
        image: basicImage,
        clickable: true,
      })

      marker.normalImage = basicImage

      // 지도 클릭 이벤트 추가
      kakao.maps.event.addListener(marker, 'click', () => {
        if (!selectedMarker || selectedMarker !== marker) {
          !!selectedMarker && selectedMarker.setImage(selectedMarker.normalImage, markerSize)
          marker.setImage(new kakao.maps.MarkerImage(treeClicked, markerSize))
        }
        selectedMarker = marker
      })
    })

    setMap(map)
  }, [])

  return (
    <S.Container ref={container}>
      <MainSearch onClick={() => dispatch(selectTree)} />
      <S.InfoSection>
        <ZoomButton map={_map} />
        <TreeInfos />
      </S.InfoSection>
    </S.Container>
  )
}
