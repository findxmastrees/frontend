import React from 'react'
import * as S from './style'
import { ProfileIcon } from '../../Icons'

export const ReviewItem = ({ comment_list, reg_id, contents, user_img, review_img }) => {
  return (
    <S.ReviewItem>
      <S.Content>
        <S.UserInfo>
          <div>
            {user_img ? <S.Profile src={user_img} /> : <ProfileIcon />}
          </div>
          <div>
            <S.Name>{reg_id}</S.Name>
            <S.Date>22.9.12.월</S.Date>
          </div>
        </S.UserInfo>
        <S.ReviewContent>{contents}</S.ReviewContent>
      </S.Content>

      {review_img && (
        <S.ImgWrapper>
          <S.Image src={review_img} />
        </S.ImgWrapper>
      )}
    </S.ReviewItem>
  )
}
