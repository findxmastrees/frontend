import React from 'react'
import * as S from './style'

export const SelectComments = ({ comment, onActive }) => {
  const handleSelectComment = () => {
    onActive(comment)
  }

  return (
    <>
      {comment.active ? (
        <S.Container selected onClick={handleSelectComment}>
          <S.CommentsImg src={comment.icon_img} alt='comments' />
          <S.CommentsBtn>{comment.comment}</S.CommentsBtn>
        </S.Container>
      ) : (
        <S.Container onClick={handleSelectComment}>
          <S.CommentsImg src={comment.icon_img} alt='comments' />
          <S.CommentsBtn>{comment.comment}</S.CommentsBtn>
        </S.Container>
      )}
    </>
  )
}
