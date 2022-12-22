import React, { useState } from 'react'
import Header from '../../components/Header'
import Review_heart from '../../assets/img/review_heart.png'
import Review_baby from '../../assets/img/review_baby.png'
import Review_cafe from '../../assets/img/review_cafe.png'
import Review_coldoutside from '../../assets/img/review_coldoutside.png'
import Review_camera from '../../assets/img/review_camera.png'
import { ReviewComments } from '../../components/Review/SelectComments'
import * as S from './style'
import { UploadPhoto } from '../../components/Review/UploadPhoto'
import { ReviewButton } from '../../components/Review/ReviewButton'
import { LeaveReview } from '../../components/Review/LeaveReview'

const COMMENTS = [
  { id: 1, img: Review_coldoutside, comment_id_list: '추우니까 따뜻하게 입어요', isClick: false },
  { id: 2, img: Review_camera, comment_id_list: '분위기가 좋아 사진 찍기 좋아요', isClick: false },
  { id: 3, img: Review_heart, comment_id_list: '연인/가족과 가기 좋아요', isClick: false },
  { id: 4, img: Review_baby, comment_id_list: '어린 아이들도 좋아해요', isClick: false },
  { id: 5, img: Review_cafe, comment_id_list: '커피 한 잔 하기 좋아요', isClick: false },
]

export const WriteReviewPage = () => {
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
        <S.TreeTitle>
          <S.MainAddress>더현대 서울 트리</S.MainAddress>
          <S.DetailAddess>서울특별시 어쩌구 무슨동 101 1.2층</S.DetailAddess>
        </S.TreeTitle>
        <S.Section>
          <div>
            <S.CommentsTitle>
              코멘트 리뷰
              {/* <S.CommentsSmallTitle>(1개 ~ 3개)</S.CommentsSmallTitle> */}
            </S.CommentsTitle>
            <S.CommentsDesc>이 트리에 어울리는 코멘트를 골라주세요.</S.CommentsDesc>
          </div>
          <form>
            <S.CommentsBox>
              {commentsList.map((comment, i) => (
                <ReviewComments
                  key={i}
                  comment={comment}
                  commentsList={commentsList}
                  onSelectComment={handleSubmit}
                />
              ))}
            </S.CommentsBox>
            <S.ReviewBox>
              <S.ReviewTitle>리뷰를 남겨주세요</S.ReviewTitle>
              <UploadPhoto />
              <LeaveReview />
            </S.ReviewBox>
            <ReviewButton write />
          </form>
        </S.Section>
      </S.Container>
    </>
  )
}
