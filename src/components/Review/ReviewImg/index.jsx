import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ExImage from '../../../assets/img/reviewImg.png'
import { Image, ImgWrapper } from './style'

export const ReviewImg = ({ img, review, tree_id, reviewImg, toInfo }) => {
  const navigate = useNavigate()
  return (
    <ImgWrapper>
      {img ? (
        <Link to='/review' state={{ review }}>
          <Image src={img} alt='Image' />
        </Link>
      ) : (
        <Image src={ExImage} alt='' />
      )}
      {reviewImg ? (
        <Image toInfo onClick={() => navigate(`/tree/${tree_id}`)} src={reviewImg} alt='Image' />
      ) : (
        <Image src={ExImage} alt='' />
      )}
    </ImgWrapper>
  )
}
