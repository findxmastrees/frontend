import styled from 'styled-components'

export const ReviewItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 20px 24px;
  border-bottom: 1px solid #f0f0f0;
`

export const ReviewTop = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 43px;
  margin-bottom: ${({ includedImg }) => includedImg ? '5px' : '15px'};

  @media screen and (max-width: 280px) {
    gap: 26px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 214px;
`

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 15px;
`

export const ProfileBox = styled.div`
  position: relative;
`

export const Profile = styled.img.attrs({
  alt: '프로필 이미지'
})`
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 50%;
`

export const Name = styled.strong`
  font-weight: 700;
  font-size: 12px;
  line-height: 1.5;
`

export const Date = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 1.5;
  color: #aeaeae;
`

export const ReviewContent = styled.div`
  font-weight: 350;
  font-size: 12px;
  line-height: 150%;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`

export const ImgWrapper = styled.div`
  width: 116px;
  height: 116px;
  border-radius: 10px;
  overflow: hidden;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
`

export const ReviewBottom = styled.div`
  display: flex;
  gap: 6px;
  font-weight: 300;
  font-size: 12px;
`

export const ReviewComment = styled.p`
  padding: 7px 6px;
  background-color: #F1F1F1;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  column-gap: 6px;
  border-radius: 5px;

  &::before {
    content: '';
    width: 15px;
    height: 15px;
    background: url(${({ commentImg }) => commentImg}) no-repeat center / 15px 15px;
  }
`

export const CommentMoreInfo = styled.span`
  padding: 7px 6px;
  background-color: #F1F1F1;
  flex-shrink: 0;
  border-radius: 5px;
  line-height: 15px;
`