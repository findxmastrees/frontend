import React from 'react'
import * as S from './style'
import { ProfileIcon, ProfileTreeIcon } from '../../Icons'

export const ReviewItem = ({ comment_list, reg_id, contents, user_img, review_img }) => {
  return (
    <S.ReviewItem>
      <S.ReviewTop includedImg={!!review_img}>
        <S.Content>
          <S.UserInfo>
            <div>
              {user_img ? (
                <S.ProfileBox>
                  <S.Profile src={user_img} />
                  <ProfileTreeIcon width='52px' height='47px' top='-5px' left='-5px' />
                </S.ProfileBox>
              ) : (
                <ProfileIcon />
              )}
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
      </S.ReviewTop>
      {comment_list.length > 0 && (
        <S.ReviewBottom>
          <S.ReviewComment commentImg={comment_list[0].icon_img}>
            {comment_list[0].comment}
          </S.ReviewComment>
          {comment_list.length > 1 && (
            <S.CommentMoreInfo>+ {comment_list.length - 1}</S.CommentMoreInfo>
          )}
        </S.ReviewBottom>
      )}
    </S.ReviewItem>
  )
}
