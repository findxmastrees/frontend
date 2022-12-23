import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './style'
import { MainSearch } from '../../components/MainSearch'
import { ZoomButton } from '../../components/MainZoom/index'
import { LocationBtn } from '../../components/common/LocationBtn/LocationButton'
import { TreeInfos } from '../../components/TreeInfos/index'
import { ResearchButton } from '../../components/ResearchButton'
import { selectTree } from '../../store/slices/treeSlice'
import treeImage from '../../assets/icons/tree.svg'
import treeClicked from '../../assets/icons/tree_clicked.svg'
import myLocationIcon from '../../assets/icons/myLocation_icon.svg'
import { useLazyGetTreesQuery } from '../../store/api/treeApiSlice'
import { NavBar } from '../../components/common/NavBar'

export const MainPage = () => {
  const { kakao } = window
  const { geolocation } = navigator
  const myLocation = useSelector((store) => store.auth.myLocation)
  const dispatch = useDispatch()
  const [getTrees, { isLoading }] = useLazyGetTreesQuery()

  const [isClick, setIsClick] = useState(false)

  const [_map, setMap] = useState()
  const container = useRef(null)

  useEffect(() => {
    if (myLocation.isLocLoading) return
    if (!container.current) return

    const getTreesMarker = async () => {
      const map = new kakao.maps.Map(container.current, {
        center: new kakao.maps.LatLng(myLocation.lat, myLocation.lon),
        level: 4,
      })
      const bounds = map.getBounds()
      const swLatLng = bounds.getSouthWest()
      const neLatLng = bounds.getNorthEast()

      const { data: trees } = await getTrees(
        {
          map_x: myLocation.lat,
          map_y: myLocation.lon,
          southwest_x: swLatLng.getLat(),
          southwest_y: swLatLng.getLng(),
          northeast_x: neLatLng.getLat(),
          northeast_y: neLatLng.getLng(),
        },
        { preferCacheValue: true },
      )

      // 각 트리 마커 추가
      let selectedMarker = null

      const basicImage = new kakao.maps.MarkerImage(treeImage, new kakao.maps.Size(40, 50))

      trees.forEach(({ tree_id, tree_x, tree_y }) => {
        const markerPosition = new kakao.maps.LatLng(tree_x, tree_y)

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
            !!selectedMarker &&
              selectedMarker.setImage(selectedMarker.normalImage, new kakao.maps.Size(40, 50))
            marker.setImage(new kakao.maps.MarkerImage(treeClicked, new kakao.maps.Size(40, 50)))
          }
          selectedMarker = marker
          setIsClick(true)

          dispatch(selectTree(tree_id))
        })
      })

      if (geolocation) {
        geolocation.getCurrentPosition((pos) => {
          // 현위치 동의시 현위치 마커 추가
          const markerSize = new kakao.maps.Size(22, 22)
          const locImage = new kakao.maps.MarkerImage(myLocationIcon, markerSize)
          const locPosition = new kakao.maps.LatLng(myLocation.lat, myLocation.lon)

          new kakao.maps.Marker({
            map: map,
            position: locPosition,
            image: locImage,
          })
          map.setCenter(locPosition)
          setMap(map)
        })
      }
    }
    getTreesMarker()
  }, [myLocation.lat, myLocation.lon, myLocation.isLocLoading, container.current])

  if (isLoading) return <p>Loading...</p>

  return (
    <>
      <S.Container ref={container}>
        <S.TopWrapper>
          <MainSearch onClick={() => dispatch(selectTree)} myLocation={myLocation} />
          <ResearchButton />
        </S.TopWrapper>
        <S.InfoSection>
          <S.ButtonWrapper>
            <LocationBtn map={_map} />
            <ZoomButton map={_map} />
          </S.ButtonWrapper>
          {isClick && <TreeInfos />}
        </S.InfoSection>
      </S.Container>
      <NavBar />
    </>
  )
}
