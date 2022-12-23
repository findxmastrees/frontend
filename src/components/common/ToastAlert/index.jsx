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
      {urlCopiedAlert ? (
        <S.Container url>
          <S.Content>URL 복사됨</S.Content>
        </S.Container>
      ) : (
        <S.Container>
          <S.Content>주소 복사됨</S.Content>
        </S.Container>
      )}
    </>
  )
}

export default ToastAlert
