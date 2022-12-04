import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { NavBar } from '../common/NavBar'
import { Container, Overlay } from './style'
import { showAddressModal, showShareModal } from '../../store/slices/modalSlice'
// import useKakaoSharing from '../../hooks/useKakaoSharing'

export const Layout = () => {
  const dispatch = useDispatch()
  const adModal = useSelector((state) => state.modal.addressShow)
  const shareModal = useSelector((state) => state.modal.shareShow)

  useEffect(() => {}, [adModal, shareModal])

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
      {adModal && <Overlay onClick={() => dispatch(showAddressModal())} />}
      {shareModal && <Overlay onClick={() => dispatch(showShareModal())} />}
    </Container>
  )
}
