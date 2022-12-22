import React, { useState } from 'react'
import Header from '../../components/Header'
import { useParams } from 'react-router-dom'
import { SelectComments } from '../../components/ReviewWrite/SelectComments'
import { ReviewButton } from '../../components/Review/ReviewButton'
import { ReviewWriteTitle } from '../../components/ReviewWrite/ReviewWriteTitle'
import { UploadPhotoAndReview } from '../../components/ReviewWrite/UploadPhotoAndReview'
import * as S from './style'
import Review_heart from '../../assets/img/review_heart.png'
import Review_baby from '../../assets/img/review_baby.png'
import Review_cafe from '../../assets/img/review_cafe.png'
import Review_coldoutside from '../../assets/img/review_coldoutside.png'
import Review_camera from '../../assets/img/review_camera.png'

const COMMENTS = [
  { id: 1, img: Review_coldoutside, comment_id_list: '추우니까 따뜻하게 입어요', isClick: false },
  { id: 2, img: Review_camera, comment_id_list: '분위기가 좋아 사진 찍기 좋아요', isClick: false },
  { id: 3, img: Review_heart, comment_id_list: '연인/가족과 가기 좋아요', isClick: false },
  { id: 4, img: Review_baby, comment_id_list: '어린 아이들도 좋아해요', isClick: false },
  { id: 5, img: Review_cafe, comment_id_list: '커피 한 잔 하기 좋아요', isClick: false },
]

export const WriteReviewPage = () => {
  const { tree_id } = useParams()

  const [selectComments, setSelectComments] = useState([])
  const [commentsList, setCommentsList] = useState(COMMENTS)

  const handleSubmit = (id, comment) => {
    setSelectComments((prev) => [...prev, comment])
    setCommentsList(
      commentsList.map((prev) => (prev.id === id ? { ...prev, isClick: !comment.isClick } : prev)),
    )

    const removeDuple = () => {
      return selectComments.filter((item, i) => {
        return (
          selectComments.findIndex((item2, j) => {
            return item.id === item2.id
          }) === i
        )
      })
    }
    return removeDuple
  }

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
          <form>
            <S.CommentsBox>
              {commentsList.map((comment, i) => (
                <SelectComments
                  key={i}
                  comment={comment}
                  commentsList={commentsList}
                  onSelectComment={handleSubmit}
                />
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
