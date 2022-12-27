import React from 'react'
import * as S from './style'
import { useNavigate } from 'react-router-dom'

export const ReviewButton = ({ write, handleToWrite, tree_id, typeSubmit }) => {
  const navigate = useNavigate()

  return (
    <S.BtnWrapper write={write} onClick={() => navigate(`/tree/${tree_id}/review-write`)}>
      <S.ReviewBtn type={typeSubmit}>
        {handleToWrite ? '후기 작성하기' : '후기 등록하기'}
      </S.ReviewBtn>
    </S.BtnWrapper>
  )
}
