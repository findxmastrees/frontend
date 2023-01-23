import React from 'react'
import * as S from './style'
import { useNavigate } from 'react-router-dom'

export const ReviewButton = ({ write, handleToWrite, tree_id }) => {
  const navigate = useNavigate()

  return (
    <S.BtnWrapper write={write} onClick={() => navigate(`/tree/${tree_id}/review-write`)}>
      <S.ReviewLink> {handleToWrite ? '후기 작성하기' : '후기 등록하기'}</S.ReviewLink>
    </S.BtnWrapper>
  )
}
