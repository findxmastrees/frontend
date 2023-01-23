import React from 'react'
import { ReviewItem, ReviewTitle } from '../..'
import * as S from './style'

export const ReviewList = ({ reviewList }) => {
  console.log(reviewList)
  
  return (
    <S.ReviewSection>
      <ReviewTitle title='방문자 후기' total={reviewList.length} />
      {reviewList.length ? (
        <S.ReviewItemList>
          {reviewList.map((review, i) => (
            <ReviewItem key={i} {...review} />
          ))}
        </S.ReviewItemList>
      ) : (
        <S.AlertParah>후기를 작성해주세요.</S.AlertParah>
      )}
    </S.ReviewSection>
  )
}
