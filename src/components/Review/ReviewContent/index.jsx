import React from 'react'
import * as S from './style'
import { useSelector } from 'react-redux'
import reviewImg from '../../../assets/img/reviewImg.png'
import profileImg from '../../../assets/icons/profile_icon.svg'

export const ReviewContent = () => {
  const { reviews } = useSelector((state) => state.tree.tree)

  return (
    <S.ReviewItemList>
      {reviews.map(({ userName, content }, i) => (
        <S.ReviewItem key={i}>
          <S.Content>
            <S.UserInfo>
              <S.Profile src={profileImg} />
              <S.Wrapper>
                <S.Name>{userName}</S.Name>
                <S.Date>22.9.12.월</S.Date>
              </S.Wrapper>
            </S.UserInfo>
            <S.ReviewContent>{content}</S.ReviewContent>
          </S.Content>

          <S.ImgWrapper>
            <S.Image src={reviewImg} />
          </S.ImgWrapper>
        </S.ReviewItem>
      ))}
    </S.ReviewItemList>
  )
}
