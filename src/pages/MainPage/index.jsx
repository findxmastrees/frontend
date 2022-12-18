import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './style'
import { MainSearch } from '../../components/MainSearch'
import { ZoomButton } from '../../components/MainZoom/index'
// import ToastAlert from '../../components/common/ToastAlert'
import { LocationBtn } from '../../components/common/LocationBtn/LocationButton'
import { TreeInfos } from '../../components/TreeInfos/index'
import { selectTree } from '../../store/slices/treeSlice'
import treeImage from '../../assets/icons/tree.svg'
import treeClicked from '../../assets/icons/tree_clicked.svg'
import myLocationIcon from '../../assets/icons/myLocation_icon.svg'
import { useLazyGetTreesQuery } from '../../store/api/treeApiSlice'

export const MainPage = () => {
  const { kakao } = window

  const dispatch = useDispatch()
  const [getTrees, { isLoading }] = useLazyGetTreesQuery()

  const [isClick, setIsClick] = useState(false)
  const [myLocation, setMyLocation] = useState({
    lat: 37.5100003045053,
    lon: 127.10286871659851,
  })

  const [_map, setMap] = useState()
  const container = useRef(null)
  // const [IsRoadName, setIsRoadName] = useState()
  // const [adcopiedAlert, setAdCopiedAlert] = useState(false)
  // const [urlcopiedAlert, setUrlCopiedAlert] = useState(false)

  useEffect(() => {
    if (!container.current) return
    const { geolocation } = navigator
    const map = new kakao.maps.Map(container.current, {
      center: new kakao.maps.LatLng(myLocation.lat, myLocation.lon),
      level: 4,
    })

    if (geolocation) {
      const markerSize = new kakao.maps.Size(22, 22)
      const locImage = new kakao.maps.MarkerImage(myLocationIcon, markerSize)
      let locPosition
      geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords
          setMyLocation({ lat: latitude, lon: longitude })
          locPosition = new kakao.maps.LatLng(latitude, longitude)

          new kakao.maps.Marker({
            map: map,
            position: locPosition,
            image: locImage,
          })
          map.setCenter(locPosition)
        },
        (err) => {
          locPosition = new kakao.maps.LatLng(myLocation.lat, myLocation.lon)
          // new kakao.maps.Marker({
          //   map: map,
          //   position: locPosition,
          //   image: locImage,
          // })
          map.setCenter(locPosition)
        },
      )
    } else {
      alert('GPS를 지원하지 않습니다')
    }

    const getTreesMarker = async () => {
      const bounds = map.getBounds()
      const swLatLng = bounds.getSouthWest()
      const neLatLng = bounds.getNorthEast()

      // const {
      //   data: { data: trees },
      // } = await getTrees(
      //   {
      //     map_x: myLocation.lat,
      //     map_y: myLocation.lon,
      //     southwest_x: swLatLng.getLat(),
      //     southwest_y: swLatLng.getLng(),
      //     northeast_x: neLatLng.getLat(),
      //     northeast_y: neLatLng.getLng(),
      //   },
      //   { preferCacheValue: true },
      // )

      // 각 트리 마커 추가
      // let selectedMarker = null
      // const markerSize = new kakao.maps.Size(40, 50)
      // const basicImage = new kakao.maps.MarkerImage(treeImage, markerSize)

      // trees.forEach(({ tree_id, tree_x, tree_y }) => {
      //   const markerPosition = new kakao.maps.LatLng(tree_x, tree_y)

      //   let marker = new kakao.maps.Marker({
      //     map: map,
      //     position: markerPosition,
      //     image: basicImage,
      //     clickable: true,
      //   })

      //   marker.normalImage = basicImage

      //   // 지도 클릭 이벤트 추가
      //   kakao.maps.event.addListener(marker, 'click', () => {
      //     if (!selectedMarker || selectedMarker !== marker) {
      //       !!selectedMarker && selectedMarker.setImage(selectedMarker.normalImage, markerSize)
      //       marker.setImage(new kakao.maps.MarkerImage(treeClicked, markerSize))
      //     }
      //     selectedMarker = marker
      //     setIsClick(true)

      //     dispatch(selectTree(tree_id))
      //   })
      // })
      setMap(map)
    }
    getTreesMarker()
  }, [])

  if (isLoading) return <p>Loading...</p>

  return (
    <S.Container ref={container}>
      <MainSearch onClick={() => dispatch(selectTree)} />
      <S.InfoSection>
        <S.ButtonWrapper>
          <LocationBtn map={_map} myLocation={myLocation} setMyLocation={setMyLocation} />
          <ZoomButton map={_map} />
        </S.ButtonWrapper>
        {isClick && <TreeInfos />}
      </S.InfoSection>

      {/* {adcopiedAlert && <ToastAlert setAdCopiedAlert={setAdCopiedAlert} IsRoadName={IsRoadName} />}
      {urlcopiedAlert && (
        <ToastAlert setUrlCopiedAlert={setUrlCopiedAlert} IsRoadName={IsRoadName} />
      )} */}
    </S.Container>
  )
}
