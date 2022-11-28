import React from 'react'
import { Image, ImgWrapper } from './style'
import ExImage from '../../../assets/img/image.png'

export const ReviewImg = () => {
  return (
    <ImgWrapper>
      <Image src={ExImage} alt='Image' />
    </ImgWrapper>
  )
}
