import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Image, ImgWrapper } from './style'
// import ExImage from '../../../assets/img/reviewImg.png'

export const ReviewImg = ({ tree_id, reviewImg, img }) => {
  const navigate = useNavigate()
  console.log(img);

  return (
    <ImgWrapper>
      {reviewImg ? (
        <Image onClick={() => navigate(`/tree/${tree_id}`)} src={img} alt='Image' />
      ) : (
        <Image IsImage src={img} alt='' />
      )}
    </ImgWrapper>
  )
}
