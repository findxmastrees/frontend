import React from 'react'
import * as S from './style'

export const LeaveReview = () => {
  return (
    <>
      <S.ReviewArea
        required
        maxLength={400}
        placeholder='트리를 구경한 소감이 어땠는지 알려주세요.'
      ></S.ReviewArea>
    </>
  )
}
