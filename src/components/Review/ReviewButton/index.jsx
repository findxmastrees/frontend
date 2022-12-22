import React from 'react'
import * as S from './style'

export const ReviewButton = ({ write }) => {
  return (
    <S.BtnWrapper write={write}>
      <S.ReviewLink> 후기 작성하기</S.ReviewLink>
    </S.BtnWrapper>
  )
}
