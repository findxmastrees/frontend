import React from 'react'
import styled from 'styled-components'
import ExImage from '../../../assets/img/image.png'

const TreeImages = () => {
  return (
    <>
      <Image src={ExImage} alt='Image' />
      <Image src={ExImage} alt='Image' />
      <Image src={ExImage} alt='Image' />
    </>
  )
}

const Image = styled.img`
  margin-right: 5px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  cursor: pointer;
`

export default TreeImages
