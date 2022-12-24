import React from 'react'
import { Link } from 'react-router-dom'
import ExImage from '../../../assets/img/reviewImg.png'
import { Image, ImgWrapper } from './style'

export const ReviewImg = ({ img, review, review_id, reviewImg, toInfo }) => {
  
  return (
    <ImgWrapper>
      {img ? (
        <Link to={`/review/${review_id}`}>
          <Image src={img} alt='Image' />
        </Link>
      ) : (
        <Image src={ExImage} alt='' />
      )}
    </ImgWrapper>
  )
}
