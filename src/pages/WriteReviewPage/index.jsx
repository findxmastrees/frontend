import React, { useState } from 'react'
import Header from '../../components/Header'
import { useParams } from 'react-router-dom'
import { useGetCommentsListQuery } from '../../store/api/reviewApiSlice'
import { SelectComments } from '../../components/ReviewWrite/SelectComments'
import { ReviewButton } from '../../components/Review/ReviewButton'
import { ReviewWriteTitle } from '../../components/ReviewWrite/ReviewWriteTitle'
import { UploadPhotoAndReview } from '../../components/ReviewWrite/UploadPhotoAndReview'
import * as S from './style'
// import Review_heart from '../../assets/img/review_heart.png'
// import Review_baby from '../../assets/img/review_baby.png'
// import Review_cafe from '../../assets/img/review_cafe.png'
// import Review_coldoutside from '../../assets/img/review_coldoutside.png'
// import Review_camera from '../../assets/img/review_camera.png'

// const COMMENTS = [
//   { id: 1, img: Review_coldoutside, isClick: false },
//   { id: 2, img: Review_camera, isClick: false },
//   { id: 3, img: Review_heart, isClick: false },
//   { id: 4, img: Review_baby, isClick: false },
//   { id: 5, img: Review_cafe, isClick: false },
// ]

export const WriteReviewPage = () => {
  const { data: comments } = useGetCommentsListQuery()
  const { tree_id } = useParams()

  const [commentsList, setCommentsList] = useState(comments)
  // active 추가해서 comment color state 변화
  console.log(setCommentsList)

  // const handleSubmit = (id, comment) => {
  //   setIsSelected(
  //     commentsList.map((prev) =>
  //       prev.comment_id === id ? { ...prev, isClick: !comment.isClick } : prev,
  //     ),
  //   )
  // }

  //   const removeDuple = () => {
  //     return selectComments.filter((item, i) => {
  //       return (
  //         selectComments.findIndex((item2, j) => {
  //           return item.id === item2.id
  //         }) === i
  //       )
  //     })
  //   }
  //   return removeDuple
  // }

  return (
    <>
      <Header />
      <S.Container>
        <ReviewWriteTitle tree_id={tree_id} />
        <S.Section>
          <S.CommentsTitle>
            코멘트 리뷰
            {/* <S.CommentsSmallTitle>(1개 ~ 3개)</S.CommentsSmallTitle> */}
          </S.CommentsTitle>
          <S.CommentsDesc>이 트리에 어울리는 코멘트를 골라주세요.</S.CommentsDesc>
          <form style={{ position: 'relative' }}>
            <S.CommentsBox>
              {commentsList?.map((comment) => (
                <SelectComments key={comment.comment_id} comment={comment} />
              ))}
            </S.CommentsBox>
            <S.ReviewBox>
              <UploadPhotoAndReview />
            </S.ReviewBox>
          </form>
          <ReviewButton write />
        </S.Section>
      </S.Container>
    </>
  )
}
