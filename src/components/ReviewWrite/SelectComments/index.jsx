import React from 'react'
import * as S from './style'

export const SelectComments = ({ comment, onSelectComment }) => {
  return (
    <>
      <div></div>
      {comment.isClick ? (
        <S.Container selected onClick={() => onSelectComment(comment.id, comment)}>
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
