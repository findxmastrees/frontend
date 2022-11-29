import React from 'react'
import { ReviewImg } from '../../common/TreeImg'
import { ReviewTitle } from '../ReviewTitle'
import * as S from './style'

export const ImgList = () => {
  const arr = Array.from({ length: 6 }, (_, i) => i)

  return (
    <S.ImgSection>
      <ReviewTitle title='방문자 사진' total={17} />
      <S.ImgItems>
        {arr.map((_, i) => (
          <ReviewImg key={i} />
        ))}
      </S.ImgItems>

      <S.MoreButton>방문자 사진 더보기</S.MoreButton>
    </S.ImgSection>
  )
}
