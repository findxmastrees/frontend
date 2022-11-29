import React, { useEffect } from 'react'
import styled from 'styled-components'

const ToastAlert = ({ setUrlCopiedAlert, setAdCopiedAlert, IsRoadName }) => {
  useEffect(() => {
    let adTimer = setTimeout(() => {
      setAdCopiedAlert(false)
    }, 2000)

    return () => {
      clearTimeout(adTimer)
    }
  }, [])

  // useEffect(() => {
  //   let urlTimer = setTimeout(() => {
  //     setUrlCopiedAlert(false)
  //   }, 2000)

  //   return () => {
  //     clearTimeout(urlTimer)
  //   }
  // }, [])
  console.log(setUrlCopiedAlert)

  return (
    <>
      <Container>
        <AddressName>{IsRoadName ? '도로명주소' : '지번주소'}</AddressName>
        <Desc>가 복사되었습니다.</Desc>
      </Container>
    </>
  )
}

export default ToastAlert

const Container = styled.div`
  position: absolute;
  bottom: 113px;
  left: 28.5px;
  width: 348px;
  height: 42px;
  text-align: center;
  color: #ffffff;
  line-height: 2.5;
  background: black;
  border-radius: 5px;
  z-index: 1000000;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);

  @keyframes slideIn {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0%);
    }
  }

  @keyframes slideOut {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-300%);
    }
  }

  animation: slideIn 0.5s ease-in-out 0s 1 normal forwards;
`

const AddressName = styled.span`
  font-weight: 600;
  color: #ffffff;
`

const Desc = styled.span`
  color: #ffffff;
`
