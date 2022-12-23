import React from 'react'
import { useLocation } from 'react-router-dom'
import { Header } from '../../components'
import { ProfileTreeIcon } from '../../components/Icons'

import * as S from './style'

const week = ['일', '월', '화', '수', '목', '금', '토']

export const ReviewPage = () => {
  const {
    state: { review },
  } = useLocation()
  console.log(review)

  return (
    <>
      <Header />
      <S.MainContainer>
        <S.ImgBox>
          <S.Image src={review.review_img} />
        </S.ImgBox>

        <S.Review>
          <S.AuthorSection>
            <S.ProfileImgBox>
              <S.AuthorImg src={review.user_img} alt='' />
              <ProfileTreeIcon width='51' height='48' />
            </S.ProfileImgBox>
            <S.AuthorInfo>
              <S.AuthorName>{review.reg_id}</S.AuthorName>
              <S.ModDate>
                {new Intl.DateTimeFormat('ko', {
                  dateStyle: 'short',
                }).format(new Date(review.reg_date))}
                {week[new Date(review.reg_date).getDay()]}
              </S.ModDate>
            </S.AuthorInfo>
          </S.AuthorSection>
          <S.ReviewContent>
            <S.AuthorComment>{review.contents}</S.AuthorComment>
            <S.CommentList>
              {review.comment_list.map(({ comment_id, comment }) => (
                <S.CommentItem key={comment_id}>{comment}</S.CommentItem>
              ))}
            </S.CommentList>
          </S.ReviewContent>
        </S.Review>
      </S.MainContainer>
    </>
  )
}
