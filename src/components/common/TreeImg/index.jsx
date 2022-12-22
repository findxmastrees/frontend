import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Image, ImgWrapper } from './style'
import ExImage from '../../../assets/img/reviewImg.png'

export const ReviewImg = ({ tree_id, img }) => {
  const navigate = useNavigate()

  return (
    <ImgWrapper>
      {img ? (
        <Image onClick={() => navigate(`/tree/${tree_id}`)} src={img} alt='Image' />
      ) : (
        <Image IsImage src={ExImage} alt='' />
      )}
    </ImgWrapper>
  )
}
