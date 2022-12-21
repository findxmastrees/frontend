import styled from 'styled-components'
import profileCircle from '../../../assets/icons/tree-circle.svg'

export const ReviewItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid #f0f0f0;
  gap: 43px;
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

  &::after {
    content: '';
    width: 40px;
    height: 40px;
    position: absolute;
    top: 0;
    left: 0;
    background: url(${profileCircle})
  }
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
  letter-spacing: -0.022em;
  width: 100%;
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
