import React from 'react'
import * as S from './style'
import { useNavigate } from 'react-router-dom'

export const ReviewButton = ({ handleToWrite, tree_id, typeSubmit }) => {
  const navigate = useNavigate()

  return handleToWrite ? (
    <>
      <S.BtnWrapper onClick={() => navigate(`/tree/${tree_id}/review-write`)}>
        <S.ReviewBtn>후기 작성하기</S.ReviewBtn>
      </S.BtnWrapper>
    </>
  ) : (
    <>
      <S.BtnWrapper typeSubmit={typeSubmit}>
        <S.ReviewBtn type={typeSubmit}>후기 등록하기</S.ReviewBtn>
      </S.BtnWrapper>
    </>
  )
}
