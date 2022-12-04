import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from '../common/NavBar'
import { Container } from './style'
// import useKakaoSharing from '../../hooks/useKakaoSharing'

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

  return (
    <Container>
      <Outlet />
      <NavBar />
    </Container>
  )
}
