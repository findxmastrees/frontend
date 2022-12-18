import React from 'react'
import styled from 'styled-components'
import { ReactComponent as BackIcon } from '../../../assets/icons/location_icon.svg'
import myLocationIcon from '../../../assets/icons/myLocation_icon.svg'

export const LocationBtn = ({ map, myLocation, setMyLocation }) => {
  const handleClick = () => {
    const { kakao } = window
    const { geolocation } = navigator

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
