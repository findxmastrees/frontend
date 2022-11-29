import styled from 'styled-components'

export const ReviewItemList = styled.ul`
  width: 100%;
`

export const ReviewItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid #f0f0f0;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 15px;
`

export const Profile = styled.img`
  width: 40px;
  height: 40px;
`

export const Wrapper = styled.div``

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
  max-width: 214px;
`

export const ImgWrapper = styled.div`
  width: 116px;
  height: 116px;
  border-radius: 10px;
  overflow: hidden;
`

export const Image = styled.img`
  width: inherit;
  height: inherit;
`
