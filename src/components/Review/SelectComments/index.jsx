import React from 'react'
import * as S from './style'

export const ReviewComments = ({ comment, onSelectComment }) => {
  return (
    <>
      {comment.isClick ? (
        <S.Container green onClick={() => onSelectComment(comment.id, comment)}>
          <S.CommentsImg src={comment.img} alt='comments' />
          <S.CommentsBtn>{comment.comment_id_list}</S.CommentsBtn>
        </S.Container>
      ) : (
        <S.Container onClick={() => onSelectComment(comment.id, comment)}>
          <S.CommentsImg src={comment.img} alt='comments' />
          <S.CommentsBtn>{comment.comment_id_list}</S.CommentsBtn>
        </S.Container>
      )}
    </>
  )
}
