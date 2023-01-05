import React from 'react'
import styled from 'styled-components'
import { ReactComponent as BackIcon } from '../../../assets/icons/location_icon.svg'
import myLocationIcon from '../../../assets/icons/myLocation_icon.svg'

export const LocationBtn = ({ map }) => {
  const handleClick = () => {
    const { kakao } = window
    const { geolocation } = navigator

    if (geolocation) {
      geolocation.getCurrentPosition((pos) => {
        // 현위치 동의시 현위치 마커 추가
        const { latitude, longitude } = pos.coords
        const markerSize = new kakao.maps.Size(22, 22)
        const locImage = new kakao.maps.MarkerImage(myLocationIcon, markerSize)
        const locPosition = new kakao.maps.LatLng(latitude, longitude)

        const marker = new kakao.maps.Marker({
          map: map,
          position: locPosition,
          image: locImage,
        })

        marker.setMap(null)
        map.setCenter(locPosition)
      })
    }
  }
  return (
    <Button onClick={handleClick}>
      <BackIcon />
    </Button>
  )
}

const Button = styled.button`
  width: 38px;
  height: 38px;
  padding: 0;
  background-color: #fff;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 0;
`
