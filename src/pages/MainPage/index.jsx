import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './style'
import { MainSearch } from '../../components/MainSearch'
import { ZoomButton } from '../../components/MainZoom/index'
import { LocationBtn } from '../../components/common/LocationBtn/LocationButton'
import { TreeInfos } from '../../components/TreeInfos/index'
import { selectTree } from '../../store/slices/treeSlice'
import treeImage from '../../assets/icons/tree.svg'
import treeClicked from '../../assets/icons/tree_clicked.svg'
import { useLazyGetTreesQuery } from '../../store/api/treeApiSlice'

export const MainPage = () => {
  const { kakao } = window

  const dispatch = useDispatch()
  const [getTrees, { isLoading }] = useLazyGetTreesQuery()

  const [isClick, setIsClick] = useState(false)

  const [_map, setMap] = useState()
  const container = useRef(null)

  // const [latLng, setLatLng] = useState({
  //   lat: 33.450701,
  //   lng: 126.570667,
  // })

  useEffect(() => {
    const getTreesMarker = async () => {
      // 트리들의 중심 좌표
      const {
        data: { data: trees },
      } = await getTrees('arg', { preferCacheValue: true });
      // 트리들의 중심좌표로 지도 생성
      const treesLat = trees.map((tree) => tree.tree_x)
      const treesLng = trees.map((tree) => tree.tree_y)
      const { minLat, minLng, maxLat, maxLng } = {
        minLat: Math.min(...treesLat),
        minLng: Math.min(...treesLng),
        maxLat: Math.max(...treesLat),
        maxLng: Math.max(...treesLng),
      }

      const centerX = minLat + (maxLat - minLat) / 2
      const centerY = minLng + (maxLng - minLng) / 2
      if (container) {
        const map = new kakao.maps.Map(container.current, {
          center: new kakao.maps.LatLng(centerX, centerY),
          level: 4,
        })

        // 각 트리 마커 추가
        let selectedMarker = null
        const markerSize = new kakao.maps.Size(40, 50)
        const basicImage = new kakao.maps.MarkerImage(treeImage, markerSize)

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
              !!selectedMarker && selectedMarker.setImage(selectedMarker.normalImage, markerSize)
              marker.setImage(new kakao.maps.MarkerImage(treeClicked, markerSize))
            }
            selectedMarker = marker
            setIsClick(true)

            dispatch(selectTree(tree_id))
          })
        })

        setMap(map)
      }
    }
    getTreesMarker()
  }, [])

  if (isLoading) return <p>Loading...</p>

  return (
    <S.Container ref={container}>
      <MainSearch onClick={() => dispatch(selectTree)} />
      <S.InfoSection>
        <S.ButtonWrapper>
          <LocationBtn />
          <ZoomButton map={_map} />
        </S.ButtonWrapper>
        {isClick && <TreeInfos />}
      </S.InfoSection>
    </S.Container>
  )
}
