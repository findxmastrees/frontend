import React from 'react'
import { useMemo } from 'react'
import { ReviewImg } from '../../common/TreeImg'
import { ReviewTitle } from '../ReviewTitle'
import * as S from './style'

export const ImgList = ({ reviewImgs }) => {
  const filteredReviewImgs = useMemo(() => reviewImgs.filter((_, i) => i < 6), [reviewImgs])

  const imgList = reviewImgs.length ? (
    <>
      {filteredReviewImgs.map((img, i) => (
        <ReviewImg key={i} img={img} />
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
