import React from 'react'
import { ReviewContent } from '../ReviewContent'
import { ReviewTitle } from '../ReviewTitle'
import * as S from './style'

export const ReviewList = () => {
  return (
    <S.ReviewSection>
      <ReviewTitle title='방문자 후기' total={5} />
      <ReviewContent />
    </S.ReviewSection>
  )
}
