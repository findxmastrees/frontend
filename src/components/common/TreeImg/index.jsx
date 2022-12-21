import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Image, ImgWrapper } from './style'
import ExImage from '../../../assets/img/reviewImg.png'

export const ReviewImg = ({ tree_id, reviewImg }) => {
  const navigate = useNavigate()

  return (
    <ImgWrapper>
      {reviewImg ? (
        <Image onClick={() => navigate(`/tree/${tree_id}`)} src={reviewImg} alt='Image' />
      ) : (
        <Image IsImage src={ExImage} alt='' />
      )}
    </ImgWrapper>
  )
}
