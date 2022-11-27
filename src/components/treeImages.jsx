import React from 'react'
import styled from 'styled-components'
import ExImage from '../assets/img/image.png'

const TreeImages = () => {
  return (
    <>
      <Container>
        <Image src={ExImage} alt='Image' />
        <Image src={ExImage} alt='Image' />
        <Image src={ExImage} alt='Image' />
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  height: 102px;
  margin: 13px 0 22px 22px;
`

const Image = styled.img`
  margin-right: 5px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

export default TreeImages
