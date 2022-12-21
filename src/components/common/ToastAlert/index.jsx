import React, { useEffect } from 'react'
import * as S from './style'

const ToastAlert = ({ setAdCopiedAlert, urlCopiedAlert, setUrlCopiedAlert }) => {
  useEffect(() => {
    if (urlCopiedAlert) {
      let urlTimer = setTimeout(() => {
        setUrlCopiedAlert(false)
      }, 2000)

      return () => {
        clearTimeout(urlTimer)
      }
    } else {
      let adTimer = setTimeout(() => {
        setAdCopiedAlert(false)
      }, 2000)

      return () => {
        clearTimeout(adTimer)
      }
    }
  }, [])

  return (
    <>
      <S.Container share={urlCopiedAlert}>
        <S.Content>복사 되었습니다.</S.Content>
      </S.Container>
    </>
  )
}

export default ToastAlert
