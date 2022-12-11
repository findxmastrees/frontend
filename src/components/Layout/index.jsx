/* eslint-disable default-case */
import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { NavBar } from '../common/NavBar'
// import useKakaoSharing from '../../hooks/useKakaoSharing'
import { Container } from './style'

export const Layout = () => {
  // 카카오 공유하기
  // useEffect(() => {
  //   const script = document.createElement('script')
  //   script.src = 'https://developers.kakao.com/sdk/js/kakao.js'
  //   script.async = true

  //   document.body.appendChild(script)

  //   return () => {
  //     document.body.removeChild(script)
  //   }
  // }, [])

  // useKakaoSharing('https://developers.kakao.com/sdk/js/kakao.js')
  const location = useLocation()

  switch (location.pathname) {
    case '/':
      return (
        <div>
          <Container>
            <Outlet />
          </Container>
        </div>
      )
  }

  return (
    <Container>
      <Outlet />
      <NavBar />
    </Container>
  )
}
