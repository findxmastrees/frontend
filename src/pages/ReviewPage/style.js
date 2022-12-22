import styled from 'styled-components';
import profileCircle from '../../assets/icons/tree-circle.svg'

export const MainContainer = styled.main`
  width: inherit;
  padding: 76px 0 100px;
`

export const ImgBox = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
`

export const Review = styled.article`
  padding: 21px 24px;
`

export const AuthorSection = styled.section`
  display: flex;
  align-items: center;
  column-gap: 12px;
  margin-bottom: 20px;
`

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`

export const ProfileImgBox = styled.div`
  position: relative;
`

export const AuthorImg = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
`

export const ProfileCircleImg = styled.img.attrs({
  src: profileCircle,
})`
  position: absolute;
  left: -3px;
  top: -7px;
  width: 50px;
`

export const AuthorName = styled.strong`
  font-weight: 700;
  font-size: 14px;
  color: #1A1A1A;
`

export const ModDate = styled.strong`
  font-weight: 400;
  font-size: 10px;
  color: #B9B9B9;
`

export const ReviewContent = styled.section`
  font-weight: 350;
  font-size: 12px;
  color: #1A1A1A;
`

export const AuthorComment = styled.p`
  margin-bottom: 12px;
`

export const CommentList = styled.ul`
  display: flex;
  gap: 6px;
  flex-flow: row wrap;
`

export const CommentItem = styled.li`
  padding: 7px 6px;
  background-color: #F1F1F1;
  flex-shrink: 0;

`
