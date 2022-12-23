import React from 'react'
import * as S from './style'

export const SelectComments = ({ comment }) => {
  console.log(comment)

  return (
    <>
      {/* {IsSelected ? (
        <S.Container selected onClick={() => onSelectComment(comment.comment_id)}>
          <S.CommentsImg src={''} alt='comments' />
          <S.CommentsBtn>{comment.comment}</S.CommentsBtn>
        </S.Container>
      ) : (
        <S.Container onClick={() => onSelectComment(comment.id)}>
          <S.CommentsImg src={''} alt='comments' />
          <S.CommentsBtn>{comment.comment}</S.CommentsBtn>
        </S.Container>
      )} */}
      <S.Container selected>
        <S.CommentsImg src={comment.icon_img} alt='comments' />
        <S.CommentsBtn>{comment.comment}</S.CommentsBtn>
      </S.Container>
    </>
  )
}
