/* eslint-disable default-case */
import React, {useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import { Container } from './style'
import { setMyLocation } from '../../store/slices/authSlice'
import { useDispatch } from 'react-redux'

export const Layout = () => {
  const { geolocation } = navigator
  const dispatch = useDispatch()

  useEffect(() => {
    if (geolocation) {
      geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords
          dispatch(setMyLocation({ lat: latitude, lon: longitude, isLocLoading: false }))
        },
        (err) => {
          dispatch(setMyLocation({ isLocLoading: false }))
        },
      )
    } else {
      alert('GPS를 지원하지 않습니다')
    }
  }, [])

  return (
    <Container>
      <Outlet />
    </Container>
  )
}
