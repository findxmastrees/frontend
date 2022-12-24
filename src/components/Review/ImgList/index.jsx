import React from 'react'
import { useMemo } from 'react'
import { ReviewImg, ReviewTitle } from '../..'
import * as S from './style'

export const ImgList = ({ reviewImgs, reviewList  }) => {
  const filteredReviewImgs = useMemo(() => reviewList.reduce((arr, obj, idx) => (
    (arr.length < 6 && obj.review_img) ? [...arr, obj] : [...arr]
  ), []), [reviewList])
  console.log(filteredReviewImgs)

  const imgList = reviewImgs.length ? (
    <>
      {filteredReviewImgs.map((review, i) => (
        <ReviewImg key={i} img={review.review_img} tree_id={review} review={review} />
      ))}
    </>
  ) : (
    <>
      <ReviewImg />
    </>
  )

  return (
    <S.ImgSection>
      <ReviewTitle title='방문자 사진' total={reviewImgs.length} />
      <S.ImgItems>{imgList}</S.ImgItems>

      <S.MoreLink>방문자 사진 더보기</S.MoreLink>
    </S.ImgSection>
  )
}
