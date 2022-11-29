import React, { useEffect, useRef } from 'react'
import * as S from './style.js'
import markerImg from '../../assets/icons/redmarker.svg'

export const MapImage = ({ lat, lng }) => {
  const container = useRef(null)

  useEffect(() => {
    const markerPosition = new window.kakao.maps.LatLng(lat, lng)
    const map = new window.kakao.maps.Map(container.current, {
      center: markerPosition,
      level: 4,
    })

    const imageSrc = markerImg
    const imageSize = new window.kakao.maps.Size(19, 23)
    const imageOption = { offset: new window.kakao.maps.Point(8, 23) }

    const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)

    const marker = new window.kakao.maps.Marker({
      position: markerPosition,
      image: markerImage,
    })

    marker.setMap(map)
  }, [])

  return <S.Container ref={container} />
}
