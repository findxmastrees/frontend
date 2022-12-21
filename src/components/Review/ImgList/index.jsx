import React from 'react'
import { ReviewImg } from '../../common/TreeImg'
import { ReviewTitle } from '../ReviewTitle'
import * as S from './style'

export const ImgList = ({ reviewImgs }) => {
  console.log(reviewImgs);
  const imgList = reviewImgs.length ? (
    <>
      {reviewImgs.map((img, i) => (
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

      <S.MoreButton>방문자 사진 더보기</S.MoreButton>
    </S.ImgSection>
  )
}
